import {produce} from 'immer'

export const MENUPOST_REQUEST='FRONT/MENUPOST_REQUEST'
export const MENUPOST_SUCCESS = 'FRONT/MENUPOST_SUCCESS'
export const MENUPOST_FAILURE = 'FRONT/MENUPOST_FAILURE'

export const MENUGET_REQUEST = 'FRONT/MENUGET_REQUEST'
export const MENUGET_SUCCESS = 'FRONT/MENUGET_SUCCESS'
export const MENUGET_FAILURE = 'FRONT/MENUGET_FAILURE'

export const CODE_REQUEST = 'FRONT/CODE_REQUEST'
export const CODE_SUCCESS = 'FRONT/CODE_SUCCESS'
export const CODE_FAILURE = 'FRONT/CODE_FAILURE'


export const initialState={
   menuPostRequest:false,
   menuGetRequest:false,
   menuInfo:{},
   menuPostError:{},
   menuGetError:{},
   codeRequest:false,
   codeError:{}
}





export default (state=initialState,action)=>{
    return produce(state,draft=>{
        switch(action.type){
           case MENUPOST_REQUEST:{
               draft.menuPostRequest=true;
               draft.menuPostError='' 
               break;
           }
             case MENUPOST_SUCCESS:{
               draft.menuPostRequest=false; 
               break;
             
           }
             case MENUPOST_REQUEST:{
               draft.menuPostRequest=false;
               draft.menuPostError=action.error 
               break;
           }
            case MENUGET_REQUEST:{
               draft.menuGetRequest=true;
               draft.menuGetError='' 
               draft.menuInfo=''
               break;
           }
             case MENUGET_SUCCESS:{
               draft.menuGetRequest=false;
               draft.menuInfo=action.data; 
               break;
           }
             case MENUGET_REQUEST:{
               draft.menuGetRequest=false;
               draft.menuGetError=action.error 
               break;
           }
            case CODE_REQUEST:{
               draft.codeRequest=true;
               draft.codeError='' 
               break;
           }
             case CODE_SUCCESS:{
               draft.codeRequest=false; 
               break;
           }
             case CODE_REQUEST:{
               draft.codeRequest=false;
               draft.codeError=action.error 
               break;
           }
           default:{
               return state;
           }


        }
    })
}