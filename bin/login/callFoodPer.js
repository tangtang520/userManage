/**
 * Created by tangtang on 14/11/13.
 */
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
var callFoodPerProvider = new ProcessDBProvider('callFoodPer');
exports.callFoodPer = function(req,res){
    var name = req.param('name');
    infoProvider.findOne({name:name},{},function(err,resultAll){
        if(err||resultAll==""){

        }else{
            callFoodPerProvider.insert({name:name,userId:resultAll.code},{},function(err,result){
                if(err||result==""){

                }else{
                    res.send({code:1});
                }
            })
        }
    })
}