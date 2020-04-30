import {takeLatest,call,all,fork,put } from 'redux-saga/effects'
import axios from 'axios'
import  {SCHEDULEGET_REQUEST,SCHEDULEGET_SUCCESS,SCHEDULEGET_FAILURE,DATEGET_REQUEST,DATEGET_SUCCESS,DATEGET_FAILURE} from '../store/timetable'




function loadScheduleAPI(){
     return axios.get('/timetable',{}) 
}


function* loadSchedule(action){
    try{
    const result=yield call(loadScheduleAPI);
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

function loadDateAPI(){
     return axios.get('/timetable/date',{}) 
}


function* loadDate(action){
    try{
    const result=yield call(loadDateAPI);
    yield put({
        type:DATEGET_SUCCESS,
        data:result.data
    })
}catch(e){
    yield put({
        type:DATEGET_FAILURE,
        error:e
    })
    }
}

function* watchLoadDate() {
  yield takeLatest(DATEGET_REQUEST,loadDate);
}
 
export default function* timetableSaga(){
    yield all([
        fork(watchLoadSchedule),
        fork(watchLoadDate)
    ])
}