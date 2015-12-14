/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
exports.delBook = function(req,res){
    var sel = req.param('sel');
    infoProvider.remove({name:sel},{},function(err,result){
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