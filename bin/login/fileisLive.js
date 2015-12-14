/**
 * Created by tangfengyuan on 14-9-18.
 */
var fs = require('fs');
exports.fileisLive = function(req,res){
    var username = req.param('username');
    var path = __dirname+"/../../public/haveFile/"+username+'.zip';
    console.log("path--====-=-=-=>>>>>>>",path);
    fs.exists(path,function(exists){
        if(exists){
            res.send({code:0,username:username})
        }else{
            res.send({code:1});
        }
    })
}

