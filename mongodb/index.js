//引出MongoDB模块
var mongoose = require('mongoose')
//连接数据库
mongoose.connect("mongodb://location:27017/gomal")

// return
var db= mongoose.connection
const Schema = mongoose.Schema
//连接数据库成功后给后台发送连接消息
db.on('open',(err)=>{
    if(err) throw err
    console.log('connect success')
})
db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error)
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库')
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

//定义数据结构
// var userSchema = new mongoose.Schema({
//     username:String,
//     id:String,
//     password:string,
//     age:Number,
// },{
//     versionKey:false
// })

// var newSchema = new mongoose.Schema({
//     id:String,
//     title:String,
//     content:String,
// },{
//     versionKey:false
// })

//定义数据模型

// var userModel = mongoose.model('user',userSchema,'userList')
// var newsModel = mongoose.model('news',newSchema,'userList')

//导出
module.exports = {
    // userModel:userModel,
    // newsModel:newsModel
}