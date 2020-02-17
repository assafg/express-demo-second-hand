var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

// const requestTimeMW = (req, res, next) => {
//     req.startTime = Date.now();
//     next();
// };

// const authMW = (req, res, next) => {
//     console.log(req.headers);
//     const { auth } = req.headers;

//     if(auth === 'true') {
//         return next();
//     }

//     res.sendStatus(401);
// }

// const authMW = (req, res, next) => {
//     const { user, pwd } = req.query;

//     // Query DB for user and password...

//     if (user === 'assaf' && pwd === '1234') {
//         return next();
//     }

//     res.sendStatus(401);
// };

// app.use(authMW);

// app.use(requestTimeMW);

// app.get('/movie/:category/:id?', (req, res) => {
//     const { category, id } = req.params;
//     res.send('Movie ' + category + ' ' + id);
// });

// app.get('/count-chars', (req, res) => {
//     const { str } = req.query;
//     setTimeout(() => {
//         const time = Date.now() - req.startTime;
//         res.send(`Chars ${str.length}, took ${time} ms`);
//     }, 1000);
// });

// app.get('/isAuthenticated', (req, res) => {
//     const num = Math.floor(Math.random() * 1000);
//     const isAuth = num % 2 === 0;

//     if (isAuth) {
//         res.send('Authenticated');
//     } else {
//         res.sendStatus(401);
//     }
// });

// app.get('/a', [
//     (req, res, next) => {
//         console.log('abc')
//         next();
//     },
//     (req, res) => {
//         res.send('a');
//     },
// ]);

app.post('/login', (req, res) => {
    const {userName, password } = req.body;

    console.log('req.body', req.body);
    
    if(userName === 'aaa' && password==='123') {
        return res.send({ message: 'ok' });
    }

    res.sendStatus(403);
})

module.exports = app;
