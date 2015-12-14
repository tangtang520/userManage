/**
 * Created by tangtang on 14-9-1.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.showImage = function(req,res){
    var username = req.param('username');
    userProvider.findOne({username:username},{},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==null||result==""||result==undefined){
                res.send({code:0});
            }else{
                res.send({code:1,result:result});
            }
        }
    })
}