/**
 * Created by tangtang on 14/11/19.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
exports.noDoMenu = function(req,res){
    infoProvider.update({},{$set:{isOrder:0}},function(err,result){

    })
}