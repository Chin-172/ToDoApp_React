import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTask] = useState([{index: 1, task: "Task", done: false}]);
  let [submittingFlag,setSubmittingFlag] = useState(false);

  useEffect( () => {
    if(!submittingFlag){
      return;
    }
    console.log('useEffect() toggled, itemSet was changed')
   setSubmittingFlag(true);
  },[tasks])
  
  return (
    <div className="App">
      <div className='Title'>
        <label>To-do List</label>
      </div>
      <ListTasks listTasks={tasks} setTask={setTask} setSubmittingFlag={setSubmittingFlag}/>
      <AddTask tasks = {tasks} setTask={setTask} setSubmittingFlag={setSubmittingFlag}/>
    </div>
  );
}

export default App;
