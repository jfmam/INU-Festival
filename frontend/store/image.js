// 사진불러오기 셔틀버스,홈화면,부스지도
import {produce} from 'immer'

export const INDEXIMAGE_REQUEST ='FRONT/INDEXIMAGE_REQUEST'
export const INDEXIMAGE_SUCCESS = 'FRONT/INDEXIMAGE_SUCCESS'
export const INDEXIMAGE_FAILURE = 'FRONT/INDEXIMAGE_FAILURE'

export const INDEXPOST_REQUEST = 'FRONT/INDEXPOST_REQUEST'
export const INDEXPOST_SUCCESS = 'FRONT/INDEXPOST_SUCCESS'
export const INDEXPOST_FAILURE = 'FRONT/INDEXPOST_FAILURE'

export const SHUTTLEIMAGE_REQUEST = 'FRONT/SHUTTLEIMAGE_REQUEST'
export const SHUTTLEIMAGE_SUCCESS = 'FRONT/SHUTTLEIMAGE_SUCCESS'
export const SHUTTLEIMAGE_FAILURE = 'FRONT/SHUTTLEIMAGE_FAILURE'

export const SHUTTLEPOST_REQUEST = 'FRONT/SHUTTLEPOST_REQUEST'
export const SHUTTLEPOST_SUCCESS = 'FRONT/SHUTTLEPOST_SUCCESS'
export const SHUTTLEPOST_FAILURE = 'FRONT/SHUTTLEPOST_FAILURE'

 export const initialState = {
    indexImagerequest:false,
    shuttleImagerequest:false,
    indexPostRequest:false,
    shuttlePostRequest: false,
    indexImageloadError:{},
    shuttleImageloadError: {},
     indexPostError:{},
    shuttlePostError: {},
    indexImage:{},
    shuttleImage:{}
}

export default(state=initialState,action)=>{
    return produce(state,draft=>{
         switch(action.type){
        case INDEXIMAGE_REQUEST:{
            draft.indexImagerequest=true
            draft.indexImageloadError=''
            break;
        }
          case INDEXIMAGE_SUCCESS:{
            draft.indexiImagerequest=false,
            draft.indexImage=action.data;
            break;
        }
          case INDEXIMAGE_FAILURE:{
            draft.indexImagerequest=false
            draft.indexImageloadError=action.error
            break;
        }
        case INDEXPOST_REQUEST: {
          draft.indexPostrequest = true
          draft.imageloadError = ''
          break;
        }
        case INDEXPOST_SUCCESS: {
          draft.indexImagerequest = false       
          break;
        }
        case INDEXPOST_FAILURE: {
          draft.indexImagerequest = false
          draft.indexImageloadError = action.error
          break;
        }
         case SHUTTLEIMAGE_REQUEST:{
            draft.shuttleImagerequest=true
            draft.shuttleImageloadError=''
            break;
        }
          case SHUTTLEIMAGE_SUCCESS:{
            draft.shuttleImagerequest=false,
            draft.shuttleImage=action.data;
            break;
        }
          case SHUTTLEIMAGE_FAILURE:{
            draft.shuttleImagerequest=false
            draft.shuttleImageloadError=action.error
            break;
        }
            case SHUTTLEPOST_REQUEST: {
              draft.shuttlePostrequest = true
              draft.shuttlePostError = ''
              break;
            }
            case SHUTTLEPOST_SUCCESS: {
              draft.shuttlePostrequest = false,
              draft.shuttleImage = action.data;
              break;
            }
            case SHUTTLEPOST_FAILURE: {
              draft.shuttlePostrequest = false
              draft.shuttlePostError = action.error
              break;
            }
         default: {
             return state;
         }
    }
    })

}
