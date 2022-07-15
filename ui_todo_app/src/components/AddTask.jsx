import {useRef} from 'react';

function AddTask({tasks, setTask, setSubmittingFlag}){

    const inputRef = useRef("");

    function AddItem(event){
        event.preventDefault();
        const currIndx = tasks.length;
        const taskContent = event.target.elements.NewTask.value;
        const newTask = {index: currIndx+1, task: taskContent, done: false}
        setSubmittingFlag(true);
        setTask( (prevTask) => {return( prevTask.concat(newTask))});
        inputRef.current.value = "";
    }

    return(
        <div>
            <form onSubmit={AddItem}>
                <input ref={inputRef} name="NewTask" placeholder="Add Task..."/>
            </form>
        </div>
    );
}

export default AddTask;