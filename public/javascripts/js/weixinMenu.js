/**
 * Created by tangtang on 14/11/9.
 */
function doImage(){
    var file = document.getElementById('getFile').files[0];
    //var txt = document.getElementById('txt').value;
    var txt = $('#txt').val();
    var name = $('#fixOpin').val();
    console.log("name--->>>"),name;
    console.log("txt--->>>",txt);
    console.log("--------",typeof (txt));
    console.log("filobg--->>>",file);
    if(txt==" "){
        alert("空格");
    }
    if(txt=="\n"){
        alert("换行");
    }
    if(file!=undefined){
        //console.log("file---<><><>",file);
        var FileController = "interface?command=weixinImg";
        var form = new FormData();
        form.append("file",file);
        form.append("filed",name);
        var xhr = new XMLHttpRequest();
        xhr.open("post",FileController,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var str = xhr.responseText;
                    var jsons = JSON.parse(xhr.responseText);
                    if(jsons.code==1){
                        alert("图片菜单上传成功");
                    }


                }
            }

        }
        xhr.send(form);
        xhr.onload = function(){

        }
    }
    if(txt!=""){
        $.ajax({
            type:"POST",
            data:{txt:txt},
            url:"/interface?command=weixinTxt",
            success:function(res){
                if(res.code==1){
                    alert("文字菜单上传成功");
                }
            }
        })
    }
    if((file!=undefined)||(txt!="")){
        $.ajax({
            type:"POST",
            data:{name:name},
            url:"/interface?command=callFoodPer",
            success:function(res){

            }
        })
    }
    if(file==undefined&&txt==""){
        alert("请选择一种上传方式");
    }
}

