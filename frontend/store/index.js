//post나 user를 감싸줄 root reducer
import {combineReducers} from 'redux';
import image from './image'
import menu from './menu'
import timetable from './timetable'

const rootReducer=combineReducers({
   image,
   menu,
   timetable
})

export default rootReducer;