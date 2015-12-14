/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var writeMenuProvider = new ProcessDBProvider('writeMenu');
exports.showMenu = function(req,res){
    writeMenuProvider.find({},{},function(err,result){
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