
import { fork,takeLatest,put,call,all} from 'redux-saga/effects'
import axios from 'axios'
import  { SHUTTLEIMAGE_REQUEST, SHUTTLEIMAGE_SUCCESS, SHUTTLEIMAGE_FAILURE, INDEXIMAGE_REQUEST, INDEXIMAGE_SUCCESS, INDEXIMAGE_FAILURE } from '../store/image'


function loadIndexAPI() {
 return axios.get('',{});
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

function loadShuttleAPI() {
 return axios.get('',{});
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
 
export default function* imageSaga(){
    yield all([
        fork(watchLoadShuttle),
        fork(watchLoadIndex),
    ])
}