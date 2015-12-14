/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
exports.weixinNewPer = function(req,res){
    var txt = req.param('txt');
    var tel = req.param('tel');
    var code = req.param('code');
    console.log("1111111111111");
    console.log("username--->>>",req.session.UserName);
    infoProvider.findOne({name:txt},{},function(err,resultAll){
        if(err){

        }else{
            if(resultAll==null||resultAll==undefined||resultAll==""){
                infoProvider.insert({name:txt,tel:tel,code:code,isOrder:0},{},function(err,result){
                    if(err){

                    }else{
                        res.send({code:1});
                    }
                })
            }else{
                res.send({code:0});
            }
        }
    })

}