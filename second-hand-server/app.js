var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');

var app = express();

app.use(cors({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public', 'build')));

app.use('/default', indexRouter);
app.use('/user', usersRouter);
app.use('/item', itemsRouter);

app.post('/login', (req, res) => {
    const {userName, password } = req.body;

    console.log('req.body', req.body);
    
    if(userName === 'aaa' && password==='123') {
        return res.send({ message: 'ok' });
    }

    res.sendStatus(403);
});


module.exports = app;
