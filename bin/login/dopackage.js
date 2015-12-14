/**
 * Created by tangtang on 14-9-9.
 */
var fs = require('fs');

var formidable = require('formidable');
exports.dopackage = function(req,res){

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log("files----->>>>",files);
           var username = fields.username;
            var tmp_path = files.file1.path;
            var filename = files.file1.name;
            var newFileName = Date.now().toString();
            var path = global.apkFile;
            var target_path = path+username+".zip";
            console.log("原来路径----》》》》",tmp_path);
            console.log("存放路径-----》》》",target_path);
            fs.rename(tmp_path,target_path,function(err){
                if(err==null||err==undefined){
                    res.send({code:0,target_path:target_path});
                }else{
                    res.send({code:1});
                }
            })
            console.log("11111111111!!!!!!!!!!!!files", files);
    })

}