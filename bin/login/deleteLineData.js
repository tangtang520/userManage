/**
 * Created by tangtang on 14-9-4.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.deleteLineData = function(req,res){
    var username = req.param('username');
    console.log("111111username",username);
    userProvider.remove({username:username},{},function(err,result){
        if(err){

        }else{
            if(result==null||result==undefined||result==""){
                res.send({code:0});
            }else{
                res.send({code:1});
            }
        }
    })
}