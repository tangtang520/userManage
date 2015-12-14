/**
 * Created by tangtang on 14-9-6.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.isLive = function(req,res){
    var username = req.param('username');
    userProvider.findOne({username:username},{},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==null||result==""||result==undefined){
                //用户名不存在
                res.send({code:0});
            }else{
                //用户名存在
                res.send({code:1});
            }
        }
    })
}