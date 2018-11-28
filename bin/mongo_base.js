const Mongolass = require('mongolass');
const mongolass = new Mongolass();

exports.db = { mongolass: mongolass };
const db = exports.db;

let connected = [];
exports.OnConnected = function (fn) {
    if (fn) {
        connected.push(fn);
    }
};

//'mongodb://localhost:27017/testdb'
exports.connectDB = function (conn) {
    return mongolass.connect(conn).then(function () {

        //================USER RELATED==================
        db.test = mongolass.model('test', {
            name:{type:'string'},

        });
        db.test.insert({name:'test'}).exec()

        connected.forEach(function (oneFn) {
            if (oneFn) {
                oneFn();
            }
        });

    });

};