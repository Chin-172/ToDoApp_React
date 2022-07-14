import Item from "./Item";

function ListTasks({listTasks, setTask, setSubmittingFlag}){

    return(
        <div className="list">
            {
                listTasks.map( (item) => {
                    return(
                        <Item
                            key={item.index}
                            item={listTasks}
                            itemName={item.task}
                            itemIndex={item.index}
                            itemSet={listTasks}
                            itemStatus={item.done}
                            setTask={setTask}
                            setSubmittingFlag={setSubmittingFlag}
                        />
                    )
                })
            }
        </div>
    );
}

export default ListTasks;