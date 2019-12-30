require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000'

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatsRouter = require('./routes/chats');

var app = express();

var cors = require('cors');
app.use(cors());

// import axios from 'axios';
// axios.defaults.baseURL = process.env.BASE_URL_EXPRESS;

const fileUpload = require('express-fileupload');
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chats', chatsRouter);

module.exports = app;
