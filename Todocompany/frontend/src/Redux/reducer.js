import {GET_DATA ,REQ_DATA ,DATA_ERROR} from './actionType';


let init = {
    todo : [],
    loading : false,
    error : false
}

const reducer = (todolist=init,action) => {

    switch(action.type){
       case GET_DATA : {
        return{...init,todo : action.playload,loading : false,error : false}
       }
       case REQ_DATA :{
        return{...todolist,loading : true}
       }
       case DATA_ERROR : {
        return{...todolist,error : true}
       }
       default : {
       return init;
       }
    }



}

export{reducer};