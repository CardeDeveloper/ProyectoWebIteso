var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var dishesRouter = require('./routes/dishes');
var tablesRouter = require('./routes/tables');
var ordersRouter = require('./routes/orders');
var authRouter = require('./routes/auth');
var ingredientsRouter = require('./routes/ingredients');

var app = express();
app.set('secretKey', '#DASW2019');
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/dishes', dishesRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/tables', tablesRouter);
app.use('/api/login', authRouter);

//handle errors
app.use(function(err, req, res,next){
    //console.log(err);
    if(err.status == 404)
        res.status(404).json({message: "Peticion no encontrada", error: 404});
    else if(err.status <500){
        res.status(err.status).json({message: "Error de cliente", error: err});
    }
    else
        res.status(500).json({message:"Algo salio mal :( !!", error: err});
});

module.exports = app;
