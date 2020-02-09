// Imports and requires

const express = require('express');
const morgan = require ('morgan');
const path = require('path')
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const customerRouter = require('./routes/customer');

// Express initialization

const app = express();

// Express settings

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Express middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodemysql'
}, 'single'));

// Routes

app.use('/', customerRouter);

// Statics file

app.use(express.static(path.join(__dirname, 'public')));

// Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})