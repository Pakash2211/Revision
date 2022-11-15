import { useDispatch } from "react-redux";
import{deleteData} from '../Redux/action';


const Todoinv = (props) =>{
   let{task,done,id} = props;
   const dispatch = useDispatch();
   const deleteTodo = (id) =>{
     dispatch(deleteData(id))
   }
  const handleChange = () =>{
    let obj = {
        id,done
    }
      dispatch(updateData(obj))
  }
    return(
        <div>
        <p onClick={() => handleChange(done)}>{task}</p>
        <button onClick={(id) => deleteTodo(id,done)}>delete</button>
        <button>update</button>
        </div>  
    )
}

export {Todoinv};