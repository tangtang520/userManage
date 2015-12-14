/**
 * Created by tangfengyuan on 14-9-26.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.getTimer = function(req,res){
    var username = req.param('username');
    var timenow = req.param('timenow');
    userProvider.update({username:username},{"$set":{time:timenow}},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==null||result==undefined||result==""){
                res.send({code:0});
            }else{
                res.send({code:1});
            }
        }

    })
}