/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var writeMenuProvider = new ProcessDBProvider('writeMenu');
var infoProvider = new ProcessDBProvider('info');
exports.doWriteMenu = function(req,res){
    var name = req.param('sel');
    var txt = req.param('txt');
    writeMenuProvider.update({name:name},{$set:{txt:txt}},function(err,result){
        if(err){

        }else{
            if(result==null||result==undefined||result==""){
                infoProvider.update({name:name},{$set:{isOrder:1}},function(err,resultAll){

                })
                res.send({code:1});
            }else{

            }
        }
    })
}