import {produce} from 'immer'

initialState={
    toggle:false
}

export const TOGGLE='menu/TOGGLE'



export default (state=initialState,action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case TOGGLE:{
                draft.toggle=action.type
                break;
            }
        }
    })
}