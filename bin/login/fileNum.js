/**
 * Created by tangfengyuan on 14-9-18.
 */
 //显示多张图片
var fs = require('fs');
exports.fileNum = function(req,res){
    var username = req.param('username');
    var pathcc = __dirname+'/../../public/output/'+username;
    //本地
    var getPath = 'http://localhost:3000/public/output/'+username+'/';
    //服务器端
    //var getPath = 'http://ch.dev.selcome.com/public/output/'+username+'/';
    fs.exists(__dirname+'/../../public/output/'+username,function(exists111){
        if(exists111){
//            fs.stat(pathcc,function(err,stat){
//                if(err){
//                    console.log("该文件不存在");
//                }else{
//                    console.log("是否文件",stat.isFile());
//                    console.log("是否文件夹",stat.isDirectory());
//                }
//            })

            fs.readdir(pathcc, function (err, files) {//读取文件夹下文件
                console.log("files----->>>>>>",files);
                var filexx = [];
                for(var i=0;i<files.length;i++){
                    var location=files[i];
                    var point = location.lastIndexOf(".");
                    var type = location.substr(point);
                    if(type==".gif"||type==".jpg"||type==".jpeg"||type=="swf"){
                        filexx.push(files[i]);
                    }
                }
                var count = filexx.length,
                    results =new Array() ;
                filexx.forEach(function (filename) {
//                    fs.readFile(filename, function (data) {
//                        console.log("data----->>>>",data);
                        var tmpResult={};
                        tmpResult["imageName"]=filename;
                        tmpResult["imagePath"] = getPath+filename;
                        results[count-1]=tmpResult ;
                        count--;
                        if (count <= 0) {
                            console.log("1111111",results);
//                    console.log("22222",results[1].imageName);
                            res.send({code:1,result:results});
                        }
//                    });
                });
            });
        }else{
            res.send({code:11});
        }
    })
}