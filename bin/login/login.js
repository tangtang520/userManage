/**
 * Created by tangtang on 14-8-6.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
var fs1 = require('fs');
require('../../modules/Config');
var fs = require('fs-extra');
var formidable = require('formidable');
var BinaryProvider=require("../../modules/BinaryProvider").BinaryProvider;
var binaryProvider=new BinaryProvider();
var Fs=require('fs');
var ObjectID=require("mongodb").ObjectID;

var ccap = require('ccap')({
    width:180,
    generate:function(){
        var s = 'ABCpqKL015XYZrsdefH67WIJghijklmn8DEFGabcVo9MN234OPQRSTUtuvwxyz';
        var text = '';
        for(var i=0;i<4;i++){
            text+= s.substr(parseInt(Math.random()*36),1);
        }
        return text;
    }});




//带有图片上传的注册
exports.testInsert = function(req,res){

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log("!!!!!!!!!!!!files",files);

        if (err) {
            res.send({code:5200,message:"读取数据失败"});
        } else {
            var imageID=new ObjectID();
            console.log("22222222222222imageID",imageID);
            var resgText = fields.resgText;
            var resgPassword = fields.resgPassword;
            var resgName = fields.resgName;
            var resgAge = fields.resgAge;
            var sex = fields.sex;
            var resgPhone = fields.resgPhone;
            var resgCountry = fields.resgCountry;
            var imageURL = global.downloadDomain+'/getImage?id='+imageID;
            console.log("9999999999imageURL",imageURL);
            var tmpPath = files.file1.path;
            var fileName = files.file1.name;
            var fileType = files.file1.type;
            userProvider.findOne({username:resgText},{},function(err,resultAll){
                if(err){
                    console.log(err);
                }else{
                    if(resultAll==null||resultAll==""||resultAll==undefined){
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
                                        userProvider.insert({username:resgText,password:resgPassword,resgName:resgName,
                                            resgAge:resgAge,sex:sex,resgPhone:resgPhone,resgCountry:resgCountry,imageURL:imageURL},{},function(err,resultTT){
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

                    }else{
                        res.send({code:2});
                    }
                }
            })

        }
    });


};


//匹配账号密码
exports.match = function(req,res){
    var text = req.param('text');
    var password = req.param('password');
    var icode = req.param('icode');
    console.log("============__________",text,password,icode);
    if(icode==""||icode==undefined||icode==null){
        res.send({code:5});
    }else{
        if(icode.toUpperCase()==req.session.code.toUpperCase()){
            userProvider.findOne({username:text},{},function(err,result){
                if(err){
                    res.send({code:0});
                }else{
                    if(result==""||result==null||result==undefined){
                        res.send({code:1});
                    }else{
                        if(result.password==password){
                            req.session.username = result.username;

                            res.send({code:2,result:result});
                        }else{
                            //密码不正确
                            res.send({code:3});
                        }
                    }
                }
            })
        }else{
            res.send({code:4});
        }
    }


}
//生成验证码
exports.getAutoCode=function(req,res){
    if(req.session.count == null || req.session.count == undefined){
        console.log("i do");
        req.session.count = 0;
    }
    if(req.session.count >= 2){
        var removeNum = req.session.count - 2;
        try{
            fs1.unlinkSync(__dirname+"/../../public/images/code"+ removeNum +'.png');
//              fs.unlinkSync(__dirname+"/../../../webImages/code"+ removeNum +'.png');


        }
        catch (e){
            console.log("error == ",e);
        }
    }
    var ary = ccap.get();
    var txt = ary[0];
    var buf = ary[1];
    console.log("txt======>>>",txt);
//    var path="/data/project/secretchat_cms/public/images/update.png";
    //在项目中的
    var path= __dirname+"/../../public/images/code"+req.session.count+'.png';//本地
    //把图片存到另外一个文件夹。不在项目中的
//    var path= __dirname+"/../../../webImages/code"+req.session.count+'.png';//本地

    var count = req.session.count;
    req.session.count += 1;
    console.log("path=====>>>",path)
        fs1.writeFile(path ,buf, function(err)  {
        if(err){
            console.log("err====>>>",err);
        }
        else{
            console.log()
            req.session.code=txt;
            res.send({text:txt,path:path,count:count});
        }
    });
}
//找到数据库中的数据，并分页
var pageNum = 5;
exports.findInfo = function(req,res){
    var pageIndex = req.param('pageIndex');
    console.log("-=-=-=-=-pageIndex",pageIndex);
    var type = req.param('type');
    var text = req.param('text');
    console.log("11111type",type);
    console.log("22222text",text);
    var condition = {};
    if(text==null||text==""||text==undefined){
        condition = {};
    }else{
        if(text!=null&&type=="username"){
            condition = {username:text};
        }
        if(text!=null&&type=="name"){
            condition = {resgName:new RegExp("^.*" + text + ".*$")};
        }
        if(text!=null&&type=="age"){
            condition = {resgAge:new RegExp("^.*" + text + ".*$")};
        }
        if(text!=null&&type=="sex"){
            condition = {sex:text};
        }
        if(text!=null&&type=="country"){
            condition = {resgCountry:new RegExp("^.*" + text + ".*$")};
        }
    }



    //找到总个数
    userProvider.count(condition,function(err,count){
        //计算一共多少页
        console.log("---<<>>>>>count",count);

        if(count%pageNum==0){
            countPage = parseInt(count/pageNum);
        }else{
            countPage = parseInt(count/pageNum)+1;
        }
        console.log("=======>>>>>>>countPage",countPage);
        //计算每页的第一个数据
        var skip = 0;

        skip = pageNum * (pageIndex - 1);
        console.log("-------<<<>>>>",skip);

                   userProvider.find(condition,{skip:parseInt(skip),limit:pageNum},function(err,result){
                if(err){
                    console.log(err);
                }else{
                    if(result==null||result==""||result==undefined){
                        res.send({code:0});
                    }else{
                        console.log("----->>>>result.length",result.length);

                        res.send({code:1,result:result,count:countPage});
                    }
                }
            })
    })
}
//获取info信息
//exports.getInfo = function(req,res){
//    var username = req.param('username');
//    console.log("======>>>username",username);
//    userProvider.findOne({username:username},{},function(err,result){
//        if(err){
//            console.log(err);
//        }else{
//            if(result==""||result==null||result==undefined){
//                res.send({code:0});
//            }else{
//                res.send({code:1,result:result});
//            }
//        }
//    })
//}