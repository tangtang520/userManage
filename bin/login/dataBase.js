/**
 * Created by tangfengyuan on 14-9-27.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var dataProvider = new ProcessDBProvider('data');
exports.dataBase = function(req,res){
    dataProvider.insert({score:1},{},function(err,result){

    })
}