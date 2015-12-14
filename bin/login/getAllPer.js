/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
exports.getAllPer = function(req,res){
    infoProvider.find({},{},function(err,result){
        if(err){

        }else{
            if(result==null||result==undefined||result==""){
                res.send({code:0});
            }else{
                console.log("result-->>",result);
                res.send({code:1,result:result});
            }
        }
    })
}