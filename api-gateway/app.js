require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const coursesRouter = require('./routes/courses');
const indexRouter = require('./routes/index');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const usersRouter = require('./routes/users');


const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false , limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/courses', coursesRouter)
app.use('/media', mediaRouter)
app.use('/orders', ordersRouter)
app.use('/payments', paymentsRouter)
app.use('/users', usersRouter);



module.exports = app;
