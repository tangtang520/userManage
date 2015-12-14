/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var imgMenuProvider = new ProcessDBProvider('imgMenu');
require('../../modules/Config');
var formidable = require('formidable');
var BinaryProvider=require("../../modules/BinaryProvider").BinaryProvider;
var binaryProvider=new BinaryProvider();
var fs=require('fs');
var ObjectID=require("mongodb").ObjectID;
exports.weixinImg = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fileds,files){
        console.log("files--->>>",files);
        if(err){
            console.log(err);
        }else{
            var imageID=new ObjectID();
            var tmpPath = files.file.path;
            var fileName = files.file.name;
            var fileType = files.file.type;
            var imageURL = global.downloadDomain+'/getImage?id='+imageID;
            fs.readFile(tmpPath, function (err, data) {
                if (err) {
                    res,send({code:5200,message:"读取数据失败"});
                } else {
//                                var imageID=new ObjectID();
                    binaryProvider.write(data,fileType,fileName,imageID, function (err, result) {
                        if (err) {
                            res.send({code:4000,message:"数据库错误"});
                        } else {
                            fs.unlink(tmpPath, function (err) {});
//                                        callback({code:0,imageURL:global.downloadDomain+'/getImage?id='+imageID});
                            imgMenuProvider.insert({imageURL:imageURL},{},function(err,resultTT){
                                if(err || resultTT.length==0){
                                }else{
                                    console.log(resultTT);
                                    console.log("111")

                                    res.send({code:1,imageURL:global.downloadDomain+'/getImage?id='+imageID});
                                }
                            });
                        }
                    });
                }
            });
        }
    })
}