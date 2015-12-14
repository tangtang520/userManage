/**
 * Created by tangtang on 14-9-1.
 */
function changeImage(){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    console.log("777777777777777username",username);
    var fileObj = document.getElementById("addAgainImage").files[0];
    console.log("11111fileObj",fileObj);
    //获取图片的src
//      var myImage = $("#myImage").attr("src");
    if(fileObj==undefined||fileObj==""||fileObj==null){
        alert("请选择你想上传的图片");
    }
//    if(myImage=='http://'+undefined){
else {
        var location=fileObj.name;
        var point = location.lastIndexOf(".");
        var type = location.substr(point);
        if(type!=".jpg"&&type!=".gif"&&type!=".png"&&type!=".swf"){
            alert("目前上传的格式只支持jpg/gif/png/swf的图片");
        }else{
            var FileController = "interface?command=addAgainImage";
            var form = new FormData();
            form.append("file1", fileObj);
            form.append("username", username);
            var xhr = new XMLHttpRequest();
            xhr.open("post", FileController, true);
            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {
                        var str = xhr.responseText;


                        var jsons = JSON.parse(xhr.responseText);
                        if (jsons.code == 1) {
                            window.location.reload();
                        }


                    }
                }
            };
            xhr.send(form);
            xhr.onload = function () {

            };
        }

    }

}

