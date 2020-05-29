import {produce} from 'immer'

export const SCHEDULEGET_REQUEST='FRONT/SCHEDULTGET_REQUEST'
export const SCHEDULEGET_SUCCESS='FRONT/SCHEDULTGET_SUCCESS'
export const SCHEDULEGET_FAILURE='FRONT/SCHEDULTGET_FAILURE'

export const SCHEDULEPOST_REQUEST='FRONT/SCHEDULEPOST_REQUEST'
export const SCHEDULEPOST_SUCCESS='FRONT/SCHEDULEPOST_SUCCESS'
export const SCHEDULEPOST_FAILURE='FRONT/SCHEDULEPOST_FAILURE'

export const SCHEDULEDELETE_REQUEST='FRONT/SCHEDULEDELETE_REQUEST'
export const SCHEDULEDELETE_SUCCESS='FRONT/SCHEDULEDELETE_SUCCESS'
export const SCHEDULEDELETE_FAILURE='FRONT/SCHEDULEDELETE_FAILURE'

export const DATEGET_REQUEST = 'FRONT/DATEGET_REQUEST'
export const DATEGET_SUCCESS = 'FRONT/DATEGET_SUCCESS'
export const DATEGET_FAILURE = 'FRONT/DATEGET_FAILURE'

export const initialState={
    scheduleRequest:false,
    scheduleInfo:{},
    scheduleError:{},
     dateRequest:false,
    dateInfo:{},
    dateError:'',
    schedulePostRequest:false,
    schedulePostMessege:'',
    schedulePostError:'',
    scheduleDeleteRequest:false,
    scheduleDeleteMessege:'',
    scheduleDeleteError:''
}

export default (state=initialState,action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case SCHEDULEGET_REQUEST:{
                draft.scheduleRequest=true;
                draft.scheduleError='';
                draft.scheduleInfo='';
                break;
            }
            case SCHEDULEGET_SUCCESS:{
                draft.scheduleRequest=false;
                draft.scheduleInfo=action.data;
                break;
            }
            case SCHEDULEGET_FAILURE:{
                draft.scheduleRequest=false;
                draft.scheduleError=action.error
                break;
            }
            case SCHEDULEPOST_REQUEST:{
                draft.schedulePostRequest=true;
                draft.schedulePostError='';
                draft.schedulePostMessege='';
                break;
            }
            case SCHEDULEPOST_SUCCESS:{
                draft.schedulePostRequest=false;
                draft.schedulePostMessege=action.data;
                break;
            }
            case SCHEDULEPOST_FAILURE:{
                draft.schedulePostRequest=false;
                draft.schedulePostError = action.error
                break;
            }
            case SCHEDULEDELETE_REQUEST:{
                draft.scheduleDeleteRequest=true;
                draft.scheduleDeleteError='';
                draft.scheduleDeleteMessege='';
                break;
            }
            case SCHEDULEDELETE_SUCCESS:{
                draft.scheduleDeleteRequest=false;
                draft.scheduleDeleteMessege=action.data;
                break;
            }
            case SCHEDULEDELETE_FAILURE:{
                draft.scheduleDeleteRequest=false;
                draft.scheduleDeleteError = action.error
                break;
            }
               case DATEGET_REQUEST:{
                draft.dateRequest=true;
                draft.dateError='';
                draft.dateInfo='';
                break;
            }
            case DATEGET_SUCCESS:{
                draft.dateRequest=false;
                draft.dateInfo=action.data;
            }
            case DATEGET_FAILURE:{
                draft.dateRequest=false;
                draft.dateError=action.error
                break;
            }
            default:{
                return state
            }
        }
    })
}