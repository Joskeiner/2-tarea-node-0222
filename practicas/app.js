const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usersSaludoRouter = require("./routes/rutersUsers");
const usersMathsRouter = require('./routes/ruterMaths');
const userList = require('./routes/ruters.List');
const  userNote = require('./routes/userNote');
const {dbConnection} = require('./db/db');
const apiCrear = require('./routes/apiFarmacia');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/userSaludo" ,usersSaludoRouter);

app.use('/maths',usersMathsRouter);

app.use('/compra', userList);

app.use('/hola', userNote);

app.use('/ver', apiCrear);

dbConnection()

module.exports = app;
