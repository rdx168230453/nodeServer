var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
const testdb = require('./mongodb/index')
// var mongoose = require('mongoose')
var ejs = require('ejs');  //引入的ejs插件


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// app.engine('html', ejs.__express);//设置html引擎
// app.set('view engine', 'html');//设置视图引擎

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//引入路由
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// // catch 404 and forward to error handler
//404操作
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//调用页面
// app.get('/', function(req, res, next) {
//     res.render('index', { title: '首页' });
// });
//接口
app.get('/',function(req,res){
  res.send({
    id:'1'
  })
})
app.get('/api/getUserInfo',function(req,res){
  res.send([{
    id:2
  }])
  // res.send('Hello GET');
})
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
http.createServer(app).listen(3000, () => console.log('node localsever start success!'));
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     res.end('ok.!');
// }).listen(3000, () => console.log('node localsever start success!'));

// app.listen(3000, () => console.log('node localsever start success!'));

module.exports = app;