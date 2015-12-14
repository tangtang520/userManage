/**
 * Created by tangtang on 14/11/7.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var txtMenuProvider = new ProcessDBProvider('txtMenu');
//var ObjectID=require("mongodb").ObjectID;
//
//var id = new ObjectID();
//console.log("ObjectID",ObjectID);
//console.log("id----->>>",id);
//exports.weixinDel = function(req,res){
//    console.log("删除微信后台数据进来");
//    txtMenuProvider.find({},{},function(err,result01){
//        console.log("33333333333result01",result01);
//        deleteSomeData(result01,0,function(msq){
//            res.send({code:1});
//        })
//    })
//}
//
////异步删除数据方法
//function deleteSomeData(array,i,callback){
//    if(i==array.length){
//        callback({code:0});
//    }else{
//        txtMenuProvider.remove({_id:array[i]._id},{},function(err,resultDel){
//            if(err){
//                console.log(err);
//            }else{
//                if(resultDel==null){
//
//                }else{
//                    callback({code:1});
//                }
//                i++;
//                deleteSomeData(array,i,callback);
//            }
//        })
//    }
//}

exports.weixinDel = function(req,res){
    txtMenuProvider.remove({},{},function(err,result){

    })
}