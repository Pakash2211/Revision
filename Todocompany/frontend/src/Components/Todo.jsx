import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from '../Redux/action';
import{Todoinv} from './Todoinv';

const Todos = () =>{
   const todos = useSelector((res)=> res);
   const dispatch = useDispatch();
   React.useEffect(()=>{
          dispatch(fetchData());
   },[])
    return(
        <>
        <h1>Todos</h1>
        {
           todos.loading ? (<h1>Loading</h1>) ? todos.error : (<h1>Error</h1>) :(
              todos.todo.map((ele=>{
                return (
                    <Todoinv key = {ele.id} {...ele} />
                  )
              }))
           )
        }
        </>
    )
}

export{Todos};