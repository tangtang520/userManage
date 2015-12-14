
require('./Config');
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

//用户系统库
var PasspoadDB = function () {
};

PasspoadDB.prototype.db = new Db(global.mongodbDB, new Server(global.mongodbHost, global.mongodbPort, {auto_reconnect: true, poolSize: 5}), {w: 0, native_parser: false});
(function () {
    PasspoadDB.prototype.db.open(function(err, db) {
        if (err) {
            throw err;
        }
        PasspoadDB.prototype.db = db;
    });
})();
exports.PasspoadDB = PasspoadDB;

/************************************************************************************************************/
//
////程序运行其他数据组成的库
//var ProcessDB = function () {
//};
//
//ProcessDB.prototype.db = new Db(global.mongodbDB2, new Server(global.mongodbHost, global.mongodbPort, {auto_reconnect: true, poolSize: 5}), {w: 0, native_parser: false});
//(function () {
//    ProcessDB.prototype.db.open(function(err, db) {
//        if (err) {
//            throw err;
//        }
//        ProcessDB.prototype.db = db;
//    });
//})();
//
//exports.ProcessDB = ProcessDB;