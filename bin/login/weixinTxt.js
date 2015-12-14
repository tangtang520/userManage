/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var txtMenuProvider = new ProcessDBProvider('txtMenu');
exports.weixinTxt = function(req,res){
    var txt = req.param('txt');
    txtMenuProvider.insert({txt:txt},{},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==null||result==undefined||result==""){
                res.send({code:0});
            }else{
                res.send({code:1})
            }
        }
    })
}