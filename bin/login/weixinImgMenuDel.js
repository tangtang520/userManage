/**
 * Created by tangtang on 14/11/10.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var imgMenuProvider = new ProcessDBProvider('imgMenu');
var ObjectID=require("mongodb").ObjectID;
exports.weixinImgMenuDel = function(req,res){
    imgMenuProvider.find({},{},function(err,result01){
        console.log("33333333333result01",result01);
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
        imgMenuProvider.remove({_id:array[i]._id},{},function(err,resultDel){
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