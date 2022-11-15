import React from 'react'
import './App.css';
import { v4 as uuid } from 'uuid';
import{useDispatch} from 'react-redux'
import{addData} from './Redux/action';
import{Todos} from './Components/Todo'

function App() {
  const [task,setTask] = React.useState("");
   const dispatch = useDispatch();
 const handleAdd = (e) =>{
     setTask(e.target.value)
 }


 const handleClick = () =>{
    let obj = {
      task,
      done : false,
      id : uuid()
    }
   dispatch(addData(obj))
   setTask("");
 }


  return (
    <div className="App">
       <h1>Todo</h1>
       <input type = "text" placeholder='add todo'  value = {task}  onChange={handleAdd} />
       <button onClick={handleClick}>add</button>
       <Todos />
    </div>
  );
}

export default App;
