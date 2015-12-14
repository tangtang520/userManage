/**
 * Created by tangtang on 14-8-6.
 */








var path = require('path');

exports.index=function(req,res){
    res.redirect('page?command=login');
    res.end();
}
//exports.action=function(req,res){
//    console.log("1111111111");
//    var command = req.param('command');
//    console.log("111111111111122222222222211111");
//    console.log("req.session==>",req.session);
//    //不能跳过登陆界面
//    if((req.session.username==null||req.session.username==undefined||req.session.username=="")&&command!='login'){
//        console.log("22222222");
//        req.session.url = req.url;
//        res.sendfile(path.join(__dirname,'../views/login/login.html'));
//
//        return;
//    }else{
//        if(command=="login"||command=="management"||command=="register"||command=="addInfo"||command=="dataManagement"||command=="newPerMessage"){
//            console.log("3333333333");
//            this[command](req,res);
//        }else{
//            console.log("44444444");
//            res.sendfile(path.join(__dirname,'../views/fail.html'));
//        }
//    }
//}
exports.action = function(req,res){
    var command = req.param('command');
    if(command == null){

    }else{
        this[command](req,res);
    }
}

login=function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/login.html'));
}
management = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/management.html'));
}
register = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/register.html'));
}
fail = function(req,res){
    res.sendfile(path.join(__dirname,'../views/fail.html'));
}
addInfo = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/addInfo.html'));
}
dataManagement = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/dataManagement.html'));
}
newPerMessage = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/newPerMessage.html'));
}
doMenu = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/doMenu.html'));
}
imgMenu = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/imgMenu.html'));
}
txtMenu = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/txtMenu.html'));
}
doAllFood = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/doAllFood.html'));
}
doBook = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/doBook.html'));
}
showAllMenu = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/showAllMenu.html'));
}
sayInfo = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/sayInfo.html'));
}
method = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/method.html'));
}
allMenu = function(req,res){
    res.sendfile(path.join(__dirname,'../views/login/allMenu.html'));
}
