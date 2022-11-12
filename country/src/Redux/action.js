import {SHOW,LOADING,ERROR} from './actionType';
import axios from 'axios'


const showData = (data) =>{

    return{
        type : SHOW,
        playload : data
    }
  
}

const loadingData = () =>{
    return{
        type : LOADING
    }
    
}

const errorData = () =>{
    return{
        type : ERROR
    }
  
}



const getData = () => (dispatch) =>{
    dispatch(loadingData());
     axios.get('http://localhost:8080/data').
     then((data)=> dispatch(showData(data))).
     catch((err) => dispatch(errorData()))
}