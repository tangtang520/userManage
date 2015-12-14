/**
 * Created by tangtang on 14/11/14.
 */
//var API = require('wechat').API;
//var api = new API('wx2a3767e2a57da7cb', '1ebe1425ffd78fa360b1d26314670d34');
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var infoProvider = new ProcessDBProvider('info');
exports.sendTextInfo = function(req,res){
    var name = req.param('name');
    var text = req.param('text');
    infoProvider.findOne({name:name},{},function(err,resultAll){
        if(err||resultAll==""){

        }else{
            //var info = name+"给你发来信息"+" "+"内容如下:"+"\n"+text;
            api.sendText(resultAll.code, text, function(err,result){
            });
            res.send({code:1});
        }
    })
}




