/**
 * Created by tangfengyuan on 14-9-27.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.findTime = function(req,res){
    var username = req.param('username');
    userProvider.findOne({username:username},{},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==null||result==undefined||result==""){
                res.send({code:0});
            }else{
                res.send({code:1,result:result});
            }
        }
    })
}