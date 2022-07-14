
function Item({item,itemName, itemIndex, itemSet, itemStatus, setTask, setSubmittingFlag}) {

    function DeleteItem(){
        const newItemSet = itemSet.filter( item => item.index !== itemIndex)
        setTask(newItemSet);
        setSubmittingFlag(true);
    }

    function DoneItem(){
        itemStatus = !itemStatus;
        // console.log(item.task);
        const updateItem = item.map( (i) => i.index === itemIndex? {...i, done: !i.done}: i);
        setTask(updateItem);
        console.log(itemStatus);
    }
    
    return(
        <div className="item">
            <div className='content'>
                <h2 style={{textDecoration: itemStatus? "line-through": ''}}>{itemName}</h2>
                <div className='btnGroup'>
                    <button id="DoneBtn" onClick={DoneItem}>Done</button>
                    <button id="DeleteBtn" onClick={DeleteItem}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Item;