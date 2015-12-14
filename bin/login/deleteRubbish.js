/**
 * Created by tangfengyuan on 14-9-20.
 */
var fs = require('fs');
exports.deleteRubbish = function(req,res){
    var username = req.param('username');
    console.log("<<>>>>>",username);
    fs.exists(__dirname+'/../../public/output/'+username+'/__MACOSX',function(exists){
        console.log("这里是否需要判断子目录");
        if(exists){
            rmdirSync(__dirname+'/../../public/output/'+username+'/__MACOSX',function(err){
                console.log(err);
            })
        }else{
            res.send({code:0});
        }
    })
}

var rmdirSync = (function(){
    function iterator(url,dirs){
        var stat = fs.statSync(url);
        if(stat.isDirectory()){
            dirs.unshift(url);//收集目录
            inner(url,dirs);
        }else if(stat.isFile()){
            fs.unlinkSync(url);//直接删除文件
        }
    }
    function inner(path,dirs){
        var arr = fs.readdirSync(path);
        for(var i = 0, el ; el = arr[i++];){
            iterator(path+"/"+el,dirs);
        }
    }
    return function(dir,cb){
        cb = cb || function(){};
        var dirs = [];

        try{
            iterator(dir,dirs);
            for(var i = 0, el ; el = dirs[i++];){
                fs.rmdirSync(el);//一次性删除所有收集到的目录
            }
            cb()
        }catch(e){//如果文件或目录本来就不存在，fs.statSync会报错，不过我们还是当成没有异常发生
            e.code === "ENOENT" ? cb() : cb(e);
        }
    }
})();

rmdirSync("aaa",function(e){
//    console.log("!!!"+e)
//    console.log("删除aaa目录以及子目录成功")
})