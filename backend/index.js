const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');


const db = require('./models');


const prod = process.env.NODE_ENV === 'production';
// dotenv.config();
const app = express();
db.sequelize.sync();



app.use(express.json())

app.use(express.urlencoded({
    extended: true
}));


app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('react nodebird 백엔드 정상 동작!');
});

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(5000,()=>{
    console.log("백엔드 정상작동")
})