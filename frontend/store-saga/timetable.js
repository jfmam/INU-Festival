import {takeLatest,call,all,fork,put } from 'redux-saga/effects'
import axios from 'axios'
import  {SCHEDULEGET_REQUEST,SCHEDULEGET_SUCCESS,SCHEDULEGET_FAILURE,DATEGET_REQUEST,DATEGET_SUCCESS,DATEGET_FAILURE,
SCHEDULEPOST_REQUEST,SCHEDULEPOST_SUCCESS,SCHEDULEPOST_FAILURE,SCHEDULEDELETE_REQUEST,SCHEDULEDELETE_SUCCESS,SCHEDULEDELETE_FAILURE
} from '../store/timetable'




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

function postScheduleAPI(scheduleData){
     return axios.post('/timetable',scheduleData) 
}


function* postSchedule(action){
    try{
    const result=yield call(postScheduleAPI,action.data);
    yield put({
        type:SCHEDULEPOST_SUCCESS,
        data:result.data
    })
}catch(e){
    yield put({
        type:SCHEDULEPOST_FAILURE,
        error:e
    })
}

}

function* watchPostSchedule() {
  yield takeLatest(SCHEDULEPOST_REQUEST,postSchedule);
}

function deleteScheduleAPI(scheduleData){
    console.log(scheduleData)
     return axios.delete(`/timetable/${scheduleData}`,{}) 
}

function* deleteSchedule(action){
    try{
    const result=yield call(deleteScheduleAPI,action.data);
    yield put({
        type:SCHEDULEDELETE_SUCCESS,
        data:result.data
    })
}catch(e){
    yield put({
        type:SCHEDULEDELETE_FAILURE,
        error:e
    })
}

}

function* watchDeleteSchedule() {
  yield takeLatest(SCHEDULEDELETE_REQUEST,deleteSchedule);
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
        fork(watchPostSchedule),
        fork(watchDeleteSchedule),
        fork(watchLoadDate)
    ])
}