/**
 * Created by tangtang on 14-9-9.
 */
var fs = require('fs');
var unzip = require('unzip');
exports.lookPackage = function(req,res){
        var username = req.param('username');
    console.log("username--->>>>",username);
    fs.exists(__dirname+'/../../public/haveFile/'+username+'.zip',function(exists){
        if(exists){
            var path11 = __dirname+'/../../public/haveFile/'+username+'.zip';
//            var newFileName = Date.now().toString();
            var extract = unzip.Extract({ path:  __dirname+'/../../public/output/'+username });
            extract.on('error', function(err) {
                console.log("error++++++++++++++++++++++");
                console.log(err);
                //解压异常处理
            });
            extract.on('finish', function() {
                res.send({code:1});
                console.log("解压完成!!");
                //解压完成处理
            });
            fs.createReadStream(path11).pipe(extract);
            console.log("|||||||||||||||||||||>>>>>>>>>><<<<<<<<<<<<<<<<");
//            var deletePath = __dirname+'/../../output/'+username+'/__MACOSX';

//            fs.existsSync(__dirname+'/../../output/'+username+'/__MACOSX',function(aa){
//                if(aa){
//                    var deletePath = __dirname+'/../../output/'+username+'/__MACOSX';
//                    fs.rmdirSync(deletePath,function(err){
//                        console.log(err);
//                    })
//                }else{
//                    res.send({code:12});
//                }
//            })
        }else{
            res.send({code:8});
        }
    })


}