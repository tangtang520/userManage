/**
 * Created by tangtang on 14/11/9.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var txtMenuProvider = new ProcessDBProvider('txtMenu');
exports.getTxtMenu = function(req,res){
    txtMenuProvider.find({},{sort: [['_id', -1]]},function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result==""){
                console.log("121212121212");
                res.send({code:0});
            }else{
                console.log("result---->>>",result[0]);
                res.send({code:1,result:result[0]});
            }
        }
    })
}