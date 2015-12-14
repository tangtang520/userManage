/**
 * Created by tangtang on 14-9-2.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.aloneRegister = function(req,res){
    var username = req.param('username');
    var password = req.param('password');
    var resgName = req.param('resgName');
    var resgAge = req.param('resgAge');
    var sex = req.param('sex');
    var resgPhone = req.param('resgPhone');
    var resgCountry = req.param('resgCountry');
    userProvider.findOne({username:username},{},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==""||result==undefined||result==null){
                userProvider.insert({username:username,password:password,resgName:resgName,resgAge:resgAge,sex:sex,resgPhone:resgPhone,resgCountry:resgCountry},function(err,resultTT){
                    if(err){
                        console.log(err);
                    }else{
                        if(resultTT==""||resultTT==undefined||resultTT==null){
                            res.send({code:0});
                        }else{
                            res.send({code:1,resultTT:resultTT});
                        }
                    }
                })
            }else{
                res.send({code:2});
            }
        }
    })
}