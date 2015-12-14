/**
 * Created by tangtang on 14-9-2.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
var ObjectID=require("mongodb").ObjectID;
exports.deleteData = function(req,res){
    userProvider.find({},{skip:0,limit:5},function(err,result01){
        console.log("33333333333result01",result01.length);
       deleteSomeData(result01,0,function(msq){
            res.send({code:1});
       })
    })
}

//异步删除数据方法
function deleteSomeData(array,i,callback){
    if(i==array.length){
        callback({code:0});
    }else{
        userProvider.remove({_id:array[i]._id},{},function(err,resultDel){
            if(err){
                console.log(err);
            }else{
                if(resultDel==null){

                }else{
                    callback({code:1});
                }
                i++;
                deleteSomeData(array,i,callback);
            }
        })
    }
}