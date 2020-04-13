import {takeLatest,call,all,fork,put } from 'redux-saga/effects'
import axios from 'axios'
import  {SCHEDULEGET_REQUEST,SCHEDULEGET_SUCCESS,SCHEDULEGET_FAILURE} from '../store/timetable'




function loadScheduleAPI(scQueary){
    // return axios.get() //와일드카드 주소
}


function* loadSchedule(action){
    try{
    const result=yield call(loadScheduleAPI,action.data);
    yield put({
        type:SCHEDULEGET_SUCCESS,
        data:result.data
    })
}catch(e){
    yield put({
        type:SCHEDULEGET_FAILURE,
        error:e
    })
}

}

function* watchLoadSchedule() {
  yield takeLatest(SCHEDULEGET_REQUEST,loadSchedule);
}
 
export default function* timetableSaga(){
    yield all([
        fork(watchLoadSchedule)
    ])
}