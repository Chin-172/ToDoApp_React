import './App.css';
import React from 'react';

function App() {
  // todos is an array object
  const [todos,setTodos] = React.useState([
    {id: 1, task: 'Do Assignment', done: false},
    {id: 2, task: 'Do lanudry', done: false},
    {id: 3, task: 'Booking', done: false}
  ])

  // NOTE props passing the argument is an object argument
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList todos={todos} setTodos={setTodos}/>     
      <AddToList todos={todos} setTodos={setTodos}/>
    </div>
  );
}



function TodoList({todos,setTodos}){       // {todos} <- Object Destructuring, now todos is an array to save the objects. Without {} todos is object.
  console.log(todos)   // therefore, in here will return ture
  
  function taskDoneHandler(todo){
  
    const updatedTodos = todos.map( (task) => task.id === todo.id? { ...todo,done: !todo.done} : task);

    setTodos(updatedTodos);
  }
  
  return(
    <ul>
      {todos.map( (todo) => (       // map() function only works with array
        <li 
          key={todo.id}
          onClick = {()=> taskDoneHandler(todo)}
          style={{ textDecoration: todo.done? "line-through" : ""}}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  )
}


function AddToList({todos,setTodos}){

  const inputRef = React.useRef();

  function addToHandler(event){
    event.preventDefault();
    // event.target.elements.addTodo.value: event.target -> form | .elements -> input & button | .addTodo -> the element that name as 'addTodo' (input) | .value -> the input's value
    const todoCount = todos.length;
    console.log('todoCount = ', todoCount);
    const newTask = {id: todoCount+1, task: event.target.elements.addTodo.value, done:false};
    // setTodos is a function that declared by useState()
    // setTodos ( {parameter} => {statements} )
    setTodos(prevTodos => {return prevTodos.concat(newTask)});
    inputRef.current.value = '';
  }

  return(
    <form onSubmit={addToHandler}>
      <input ref={inputRef} name="addTodo" placeholder='Add Todo'/>
      <button type='submit'>Add</button>
    </form>
  )
}
export default App;
