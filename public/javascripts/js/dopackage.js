/**
 * Created by tangtang on 14-9-9.
 */
//上传压缩包

function dopackage(){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    var fileObj = document.getElementById('package').files[0];
    console.log("fileObj---->>>>>>>>>>>",fileObj);
    if(fileObj==undefined||fileObj==null||fileObj==undefined){
        alert("请先选择需要上传的压缩包");
    }else{
        var location=fileObj.name;
        var point = location.lastIndexOf(".");

        var type = location.substr(point);
        console.log("type=====>>>>",type);
        if(type==".zip"){
//            if(fileObj==null||fileObj==""||fileObj==undefined){
//                alert("请选择你要上传的压缩包");
//            }else{
                var FileController = "interface?command=dopackage";
                var form = new FormData();
                form.append("file1",fileObj);
                form.append("username",username);
                var xhr = new XMLHttpRequest();
                xhr.open("post",FileController,true);
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            var str = xhr.responseText;
                            var jsons = JSON.parse(xhr.responseText);
                            if(jsons.code==0){
                                alert("上传成功");
                            }


                        }
                    }

                }
                xhr.send(form);
                xhr.onload = function(){

                }
//            }
        }else{
            alert("请选择zip压缩包");
        }
    }




}
//解压压缩包
function lookPackage(){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    var fileObj = document.getElementById('package').files[0];

        $.ajax({
            type:"POST",
            data:{username:username},
            url:"interface?command=lookPackage",
            success:function(res){
                if(res.code==1){
                    alert("解压完成");
                }
                if(res.code==8){
                    alert("请先上传压缩包");
                }
            }
        })


}


//多张图片同时显示
function seeImageAll(){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
//    var fileObj = document.getElementById('package').files[0];

        $.ajax({
            type:"POST",
            data:{username:username},
            url:"interface?command=fileNum",
            success:function(res){
                console.log("res---->>>>>",res);
                if(res.code==123){
                    alert("上传的压缩包中只能包含gig/png/jpg/swf格式的图片");
                }
                if(res.code==1){
                    console.log('res.result---->>>>',res.result);
                    $('#outputContainer').empty();
                    for(var i=0;i<res.result.length;i++){
                        console.log("path--->>>>",res.result[i].imagePath);
//                    $('#outputContainer').empty();
                        console.log("1111111");
                        $('#outputContainer').append(

//                     "<img src='"+res.result[i].imagePath+"'>"
                                "<img src="+res.result[i].imagePath+" height=120px width=120px> "
                        )

                    }
                }
                if(res.code==11){
                    alert("没有解压压缩包");
                }


            }
        })






}
//下载压缩包
    function downloadPackage(){

        var username = window.location.search.substr(1).split("=")[2].split('&')[0];


//        console.log("url---->>>>",url);
        $.ajax({
            type:"POST",
            data:{username:username},
            url:"interface?command=fileisLive",
            success:function(res){

                if(res.code==0){
                    //本地
                    var url = "http://localhost:3000/public/haveFile/"+username+'.zip';
                    //服务器
                    //var url = "http://ch.dev.selcome.com/public/haveFile/"+username+'.zip';
//                    document.getElementById('downLoo').href=url;
                    window.location.href=url;
//                    $('#downLoo').attr("href",url);
                }else{
                    console.log("55555");
                    alert("请上传压缩包");
                }
            }
        })
    }

//删除解压出来的__MACOSX文件
function deleteRubb(){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    $.ajax({
        type:"POST",
        data:{username:username},
        url:"interface?command=deleteRubbish",
        success:function(res){
            return true;
        }
    })
}

