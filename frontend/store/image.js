// 사진불러오기 셔틀버스,홈화면,부스지도
import {produce} from 'immer'

export const INDEXIMAGE_REQUEST ='FRONT/INDEXIMAGE_REQUEST'
export const INDEXIMAGE_SUCCESS = 'FRONT/INDEXIMAGE_SUCCESS'
export const INDEXIMAGE_FAILURE = 'FRONT/INDEXIMAGE_FAILURE'

export const SHUTTLEIMAGE_REQUEST = 'FRONT/SHUTTLEIMAGE_REQUEST'
export const SHUTTLEIMAGE_SUCCESS = 'FRONT/SHUTTLEIMAGE_SUCCESS'
export const SHUTTLEIMAGE_FAILURE = 'FRONT/SHUTTLEIMAGE_FAILURE'

 export const initialState = {
    imagerequest:false,
    imageloadError:{},
    indexImage:{},
    shuttleImage:{}
}

export default(state=initialState,action)=>{
    return produce(state,draft=>{
         switch(action.type){
        case INDEXIMAGE_REQUEST:{
            draft.imagerequest=true
            draft.imageloadError=''
            break;
        }
          case INDEXIMAGE_SUCCESS:{
            draft.imagerequest=false,
            draft.indexImage=action.data;
            break;
        }
          case INDEXIMAGE_FAILURE:{
            draft.imagerequest=false
            draft.imageloadError=action.error
            break;
        }
         case SHUTTLEIMAGE_REQUEST:{
            draft.imagerequest=true
            draft.imageloadError=''
            break;
        }
          case SHUTTLEIMAGE_SUCCESS:{
            draft.imagerequest=false,
            draft.shuttleImage=action.data;
            break;
        }
          case SHUTTLEIMAGE_FAILURE:{
            draft.imagerequest=false
            draft.imageloadError=action.error
            break;
        }
         default: {
             return state;
         }
    }
    })

}
