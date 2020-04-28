import {produce} from 'immer'

export const SCHEDULEGET_REQUEST='FRONT/SCHEDULTGET_REQUEST'
export const SCHEDULEGET_SUCCESS='FRONT/SCHEDULTGET_SUCCESS'
export const SCHEDULEGET_FAILURE='FRONT/SCHEDULTGET_FAILURE'

export const DATEGET_REQUEST = 'FRONT/DATEGET_REQUEST'
export const DATEGET_SUCCESS = 'FRONT/DATEGET_SUCCESS'
export const DATEGET_FAILURE = 'FRONT/DATEGET_FAILURE'

export const initialState={
    scheduleRequest:false,
    scheduleInfo:{},
    scheduleError:{},
     dateRequest:false,
    dateInfo:{},
    dateError:{}
}

export default (state=initialState,action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case SCHEDULEGET_REQUEST:{
                draft.scheduleRequest=true;
                draft.scheduleError='';
                draft.scheduleInfo='';
            }
            case SCHEDULEGET_SUCCESS:{
                draft.scheduleRequest=false;
                draft.scheduleInfo=action.data;
            }
            case SCHEDULEGET_FAILURE:{
                draft.scheduleRequest=false;
                draft.scheduleError=action.error
            }
               case DATEGET_REQUEST:{
                draft.dateRequest=true;
                draft.dateError='';
                draft.dateInfo='';
            }
            case DATEGET_SUCCESS:{
                draft.dateRequest=false;
                draft.dateInfo=action.data;
            }
            case DATEGET_FAILURE:{
                draft.dateRequest=false;
                draft.dateError=action.error
            }
            default:{
                return state
            }
        }
    })
}