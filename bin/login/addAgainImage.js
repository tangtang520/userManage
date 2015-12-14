/**
 * Created by tangtang on 14-9-3.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
require('../../modules/Config');
var fs = require('fs-extra');
var formidable = require('formidable');
var BinaryProvider=require("../../modules/BinaryProvider").BinaryProvider;
var binaryProvider=new BinaryProvider();
var Fs=require('fs');
var ObjectID=require("mongodb").ObjectID;
exports.addAgainImage = function(req,res){
    console.log("kkkkkkkkkkkk");

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log("!!!!!!!!!!!!files",files);
        if (err) {
            res.send({code:5200,message:"读取数据失败"});
        } else {
            var imageID=new ObjectID();
            var username = fields.username;
            console.log("11111111111username",username);
            console.log("22222222222222imageID",imageID);
            var imageURL = global.downloadDomain+'/getImage?id='+imageID;
            console.log("9999999999imageURL",imageURL);
            var tmpPath = files.file1.path;
            var fileName = files.file1.name;
            var fileType = files.file1.type;
                        Fs.readFile(tmpPath, function (err, data) {
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
                                        userProvider.update({username:username},{$set:{imageURL:imageURL}},function(err,resultTT){
                                            if(err){
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
    });
};

