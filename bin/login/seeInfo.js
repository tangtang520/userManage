/**
 * Created by tangtang on 14/11/26.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
exports.seeInfo = function(req,res){
    infoProvider.find({},{},function(err,result){
        console.log("result---->>>>>>",result);
        console.log("length---->>>>",result.length);
    })
}