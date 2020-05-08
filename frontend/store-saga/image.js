
import { fork,takeLatest,put,call,all} from 'redux-saga/effects'
import axios from 'axios'
import  { SHUTTLEIMAGE_REQUEST, SHUTTLEIMAGE_SUCCESS, SHUTTLEIMAGE_FAILURE, INDEXIMAGE_REQUEST, INDEXIMAGE_SUCCESS, INDEXIMAGE_FAILURE, 
SHUTTLEPOST_SUCCESS,SHUTTLEPOST_FAILURE,SHUTTLEPOST_REQUEST,INDEXPOST_FAILURE,INDEXPOST_REQUEST,INDEXPOST_SUCCESS
} from '../store/image'


function loadIndexAPI() {
 return axios.get('/image',{});
}

function* loadIndex(action){
    try{
    const result=yield call(loadIndexAPI);
    yield put({
        type:INDEXIMAGE_SUCCESS,
        data:result.data
        //code정보를 보내줘야하나? code를 보내주면 한번에 정보를 보내줘야하지않을까?
    })
    }catch(e){
        yield put({
        type:INDEXIMAGE_FAILURE,
        error:e
        })
    }
}


function* watchLoadIndex() {
  yield takeLatest(INDEXIMAGE_REQUEST,loadIndex);
}

function postIndexAPI(indexImg) {
 return axios.post('/image',indexImg);
}

function* postIndex(action){
    try{
    const result=yield call(potstIndexAPI);
    yield put({
        type:INDEXPOST_SUCCESS,
        data:result.data
        //code정보를 보내줘야하나? code를 보내주면 한번에 정보를 보내줘야하지않을까?
    })
    }catch(e){
        yield put({
        type:INDEXPOST_FAILURE,
        error:e
        })
    }
}

function* watchPostIndex() {
  yield takeLatest(INDEXPOST_REQUEST,postIndex);
}

function loadShuttleAPI() {
 return axios.get('/image/shuttle',{});
}

function* loadShuttle(action){
    try{
    const result=yield call(loadShuttleAPI,action.data);
    yield put({
        type:SHUTTLEIMAGE_SUCCESS,
        data:result.data
        //code정보를 보내줘야하나? code를 보내주면 한번에 정보를 보내줘야하지않을까?
    })
    }catch(e){
        yield put({
        type: SHUTTLEIMAGE_FAILURE,
        error:e
        })
    }
}

function* watchLoadShuttle() {
  yield takeLatest(SHUTTLEIMAGE_REQUEST,loadShuttle);
}

function postShuttleAPI(shuttleImg) {
 return axios.post('/image/shuttle',shuttleImg);
}

function* postShuttle(action){
    try{
    const result=yield call(postShuttleAPI,action.data);
    yield put({
        type:SHUTTLEPOST_SUCCESS,
        data:result.data
        //code정보를 보내줘야하나? code를 보내주면 한번에 정보를 보내줘야하지않을까?
    })
    }catch(e){
        yield put({
        type: SHUTTLEPOST_FAILURE,
        error:e
        })
    }
}

function* watchPostShuttle() {
  yield takeLatest(SHUTTLEPOST_REQUEST,postShuttle);
}
 
export default function* imageSaga(){
    yield all([
        fork(watchLoadShuttle),
        fork(watchLoadIndex),
        fork(watchPostIndex),
        fork(watchPostShuttle)
    ])
}