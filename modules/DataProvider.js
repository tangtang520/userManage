
/**
 * Created by tangtang on 14-8-6.
 */


var PasspoadDB = require('./Provider').PasspoadDB,
//    ProcessDB = require('./Provider').ProcessDB,
    util = require('util');

var PasspoadDBProvider = function (collectionName) {
    this.collectionName = collectionName;
};

util.inherits(PasspoadDBProvider, PasspoadDB);

PasspoadDBProvider.prototype.getCollection = function (callback) {            //创建一个getcollection方法
    this.db.collection(this.collectionName, function (err, collection) {    //返回这个 数据库的表
        if (err) callback(err);
        else callback(err, collection);
    });
};
PasspoadDBProvider.prototype.mapReduce = function (map, reduce, options, callback) {
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            if(options.verbose){
                collection.mapReduce(map, reduce, options, function(err, collection,stats) {
                    callback(err,collection,stats);
                });
            }else{
                collection.mapReduce(map, reduce, options, function(err, collection) {
                    callback(err,collection);
                });
            }


        }
    });
};
PasspoadDBProvider.prototype.update = function (selector, document, options, callback) {
    if ('function' === typeof options) {
        callback = options;
        options = {upsert: true, multi: true, w: 1};   //更新这个数据的对象内容
    }
    this.getCollection(function (err, collection) {       //方法
        if (err) callback(err);
        else {
            collection.update(selector, document, options, function (err, result) {
                callback(err, result);
            });
        }
    });
};
PasspoadDBProvider.prototype.find = function (selector, options, callback) {
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            collection.find(selector, options).toArray(function (err, result) {
                if(result){
                    callback(err, result);
                }else {
                    callback(err, []);
                }
            });
        }
    });
};
PasspoadDBProvider.prototype.findAndSort = function (selector, options, sort, callback) {
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            collection.find(selector, options).sort(sort).toArray(function (err, result) {
                if(result){
                    callback(err, result);
                }else {
                    callback(err, []);
                }
            });
        }
    });
};

PasspoadDBProvider.prototype.findOne = function (selector, options, callback) {
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            collection.findOne(selector, options, function (err, result) {
                callback(err, result);
            });
        }
    });
};

PasspoadDBProvider.prototype.insert = function (docs, options, callback) {
    console.log("insert=========>>>");
    this.getCollection(function (err, collection) {
        console.log("insert=======1111111==>>>");
        if (err) callback(err);
        else {
            console.log("insert=====22222====>>>");
            collection.insert(docs, options, function (err, result) {
                console.log("insert======233333===>>>");
                console.log("err=========>>>",err,"result==",result);
                callback(err, result);
            });
        }
    });
};

PasspoadDBProvider.prototype.remove = function (selector, options, callback) {
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            collection.remove(selector, options, function (err, result) {
                callback(err, result);
            });
        }
    });
};

PasspoadDBProvider.prototype.findAndRemove = function (query, options, callback) {
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            collection.findAndRemove(query, options, function (err, result) {
                callback(err, result);
            });
        }
    });
};
PasspoadDBProvider.prototype.count=function(selector, callback){
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            collection.count(selector,function (err, count) {
                callback(err, count);
            });
        }
    });
}
PasspoadDBProvider.prototype.pagination=function(pageination, callback){
    this.getCollection(function (err, collection) {
        if (err) callback(err);
        else {
            var options={};
            options.limit=parseInt(pageination.pageNumber)+1;
            options.skip=pageination.begin;
            if(pageination.sort){
                options.sort=pageination.sort;
            }
            collection.find(pageination.query, options).toArray(function (err, resultarray) {
                if(resultarray){
                    var result={};
                    if(resultarray.length==options.limit){
                        result.more=true;//有下一页
//                        result.pageIndex=pageination.pageIndex+2;
                        resultarray.splice(pageination.pageNumber,1);
                    }else{
//                        result.pageIndex=pageination.pageIndex+1;
                        result.more=false;//有下一页
                    }
                    if(pageination.pageIndex==0){
                        result.previous=false;
                    }else{
                        result.previous=true;
                    }
                    result.array=resultarray;
                    callback(err, result);
                }else {
                    callback(err, []);
                }
            });
        }
    });
};

exports.PasspoadDBProvider = PasspoadDBProvider;


//
//var ProcessDBProvider = function (collectionName) {
//    this.collectionName = collectionName;
//};
//
//util.inherits(ProcessDBProvider, ProcessDB);
//
//ProcessDBProvider.prototype.getCollection = function (callback) {            //创建一个getcollection方法
//    this.db.collection(this.collectionName, function (err, collection) {    //返回这个 数据库的表
//        if (err) callback(err);
//        else callback(err, collection);
//    });
//};
//ProcessDBProvider.prototype.mapReduce = function (map, reduce, options, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            if(options.verbose){
//                collection.mapReduce(map, reduce, options, function(err, collection,stats) {
//                    callback(err,collection,stats);
//                });
//            }else{
//                collection.mapReduce(map, reduce, options, function(err, collection) {
//                    callback(err,collection);
//                });
//            }
//
//
//        }
//    });
//};
//ProcessDBProvider.prototype.update = function (selector, document, options, callback) {
//    if ('function' === typeof options) {
//        callback = options;
//        options = {upsert: true, multi: true, w: 1};   //更新这个数据的对象内容
//    }
//    this.getCollection(function (err, collection) {       //方法
//        if (err) callback(err);
//        else {
//            collection.update(selector, document, options, function (err, result) {
//                callback(err, result);
//            });
//        }
//    });
//};
//ProcessDBProvider.prototype.find = function (selector, options, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.find(selector, options).toArray(function (err, result) {
//                if(result){
//                    callback(err, result);
//                }else {
//                    callback(err, []);
//                }
//            });
//        }
//    });
//};
//ProcessDBProvider.prototype.findAndSort = function (selector, options, sort, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.find(selector, options).sort(sort).toArray(function (err, result) {
//                if(result){
//                    callback(err, result);
//                }else {
//                    callback(err, []);
//                }
//            });
//        }
//    });
//};
//
//ProcessDBProvider.prototype.findOne = function (selector, options, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.findOne(selector, options, function (err, result) {
//                callback(err, result);
//            });
//        }
//    });
//};
//
//ProcessDBProvider.prototype.insert = function (docs, options, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.insert(docs, options, function (err, result) {
//                callback(err, result);
//            });
//        }
//    });
//};
//
//ProcessDBProvider.prototype.remove = function (selector, options, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.remove(selector, options, function (err, result) {
//                callback(err, result);
//            });
//        }
//    });
//};
//
//ProcessDBProvider.prototype.findAndRemove = function (query, options, callback) {
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.findAndRemove(query, options, function (err, result) {
//                callback(err, result);
//            });
//        }
//    });
//};
//ProcessDBProvider.prototype.count=function(selector, callback){
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            collection.count(selector,function (err, count) {
//                callback(err, count);
//            });
//        }
//    });
//}
//ProcessDBProvider.prototype.pagination=function(pageination, callback){
//    this.getCollection(function (err, collection) {
//        if (err) callback(err);
//        else {
//            var options={};
//            options.limit=parseInt(pageination.pageNumber)+1;
//            options.skip=pageination.begin;
//            if(pageination.sort){
//                options.sort=pageination.sort;
//            }
//            collection.find(pageination.query, options).toArray(function (err, resultarray) {
//                if(resultarray){
//                    var result={};
//                    if(resultarray.length==options.limit){
//                        result.more=true;//有下一页
////                        result.pageIndex=pageination.pageIndex+2;
//                        resultarray.splice(pageination.pageNumber,1);
//                    }else{
////                        result.pageIndex=pageination.pageIndex+1;
//                        result.more=false;//有下一页
//                    }
//                    if(pageination.pageIndex==0){
//                        result.previous=false;
//                    }else{
//                        result.previous=true;
//                    }
//                    result.array=resultarray;
//                    callback(err, result);
//                }else {
//                    callback(err, []);
//                }
//            });
//        }
//    });
//};
//
//exports.ProcessDBProvider = ProcessDBProvider;

