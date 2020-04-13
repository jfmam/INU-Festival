import {produce} from 'immer'

export const SCHEDULEGET_REQUEST='FRONT/SCHEDULTGET_REQUEST'
export const SCHEDULEGET_SUCCESS='FRONT/SCHEDULTGET_SUCCESS'
export const SCHEDULEGET_FAILURE='FRONT/SCHEDULTGET_FAILURE'

export const initialState={
    scheduleRequest:false,
    scheduleInfo:{},
    scheduleError:{}
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
            default:{
                return state
            }
        }
    })
}