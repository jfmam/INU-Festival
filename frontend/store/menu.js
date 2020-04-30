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

export const GETALLBOOTHINFO_REQUEST = 'FRONT/GETALLBOOTHINFO_REQUEST'
export const GETALLBOOTHINFO_SUCCESS = 'FRONT/GETALLBOOTHINFO_SUCCESS'
export const GETALLBOOTHINFO_FAILURE = 'FRONT/GETALLBOOTHINFO_FAILURE'

export const initialState={
   menuPostRequest:false,
   menuGetRequest:false,
   menuInfo:null,//메뉴등록정보
   menuPostError:{},
   menuGetError:{},
   codeRequest:false,
   codeInfo:null, //코드조회정보
   codeError:{},
   boothRequst:false,
   boothError:'',
   allBoothInfo:{},
   postSuccess:null
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
               draft.postSuccess=action.data
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
             case MENUGET_FAILURE:{
               draft.menuGetRequest=false;
               draft.menuGetError=action.error 
               break;
           }
            case CODE_REQUEST:{
               draft.codeRequest=true;
               draft.codeError='';
               draft.codeInfo=null 
               break;
           }
             case CODE_SUCCESS:{
               draft.codeRequest=false; 
               draft.codeInfo=action.data;
               break;
           }
             case CODE_FAILURE:{
               draft.codeRequest=false;
               draft.codeError=action.error 
               break;
           }
               case GETALLBOOTHINFO_REQUEST:{
               draft.boothRequest=true;
               draft.boothError=''; 
               allBoothInfo={};
               break;
           }
             case GETALLBOOTHINFO_SUCCESS:{
               draft.boothRequest=false; 
               draft.allBoothInfo=action.data;
               break;
           }
             case GETALLBOOTHINFO_FAILURE:{
               draft.bootheRequest=false;
               draft.boothError=action.error 
               break;
           }
           default:{
               return state;
           }


        }
    })
}