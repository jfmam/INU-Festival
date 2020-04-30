const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');


const db = require('./models');
const app=express();

const prod = process.env.NODE_ENV === 'production';
// dotenv.config();

db.sequelize.sync();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

const adminAPI = require('./router/admin');
const timetableAPI = require('./router/timetable');
const imageAPI = require('./router/image');

app.use('/api/admin', adminAPI);
app.use('/api/timetable', timetableAPI);
app.use('/api/image', imageAPI);
// app.use('/api/hashtag', hashtagAPIRouter);

app.get('/', (req, res) => {
    res.send('react nodebird 백엔드 정상 동작!');
});

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구


app.listen(5000,()=>{
    console.log("백엔드 정상작동")
})