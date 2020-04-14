import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import image from './image'
import menu from './menu'
import timetable from './timetable'

axios.defaults.baseURL = 'http://localhost:5000/api';

export default function* rootSaga() {
  yield all([
    fork(image),
    fork(menu),
    fork(timetable)
  ]);
}