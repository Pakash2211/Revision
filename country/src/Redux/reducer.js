import {SHOW,LOADING,ERROR} from './actionType';


const init = {
    loading : false,
    error : false,
    data : []
}

const reducer = (table=init,action) =>{

switch(action.type){
    case SHOW : {
        return{
            ...table,loading : false,error : false, data : action.playload
        }
    }

    case LOADING : {
        return{
            ...table,loading : true
        }
    }

    case ERROR : {
        return{
            ...table,loading : false,error : true
        }
    }

    default : {
        return{...table}
    }

}


}

export{reducer};