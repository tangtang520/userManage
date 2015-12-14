//进来就生成邀请码
$(document).ready(function(){
    getAuthCode();
})
//更换邀请码
function changeCode(){
    getAuthCode();
}



function getAuthCode(){
    $.ajax({
        type:"POST",
        data:{},
        url:"/interface?command=getAutoCode",
        success:function(res){
//            console.log("11111111111111111");
            $('#getCode').empty();
//            console.log("2222222222222");
            //本地
            $('#getCode').append("<img src='http://localhost:3000/public/images/code"+res.count+".png' height=35px width=102px>");

            //服务器
            //$('#getCode').append("<img src='http://ch.dev.selcome.com/public/images/code"+res.count+".png' height=35px width=102px>");

        }
    })
}


//登陆操作

function dologin(){
    var text = $('#text').val();
    var password = $('#password').val();
    var icode = $('#icode').val();

//    console.log("222222222",text,password,icode);
    $.ajax({
        type:"POST",
        data:{text:text,password:password,icode:icode},
        url:"interface?command=match",
        success:function(res){
            if(res.code==3){
                alert("密码不正确");
            }
            if(res.code==5){
                alert("验证码为空");
            }
            if(res.code==4){
                alert("请输入正确的验证码");
//                document.getElementById('icode').va='none';
                document.getElementById("icode").value="";


            }
            if(res.code==1){
              alert('用户名不存在')
            };
            if(text==null||text==""||text==undefined||password==null||password==""||password==undefined){
                alert("请输入用户名或密码");
            }else{
                if(res.code==2){
                    console.log("...............res.url",res.url);
                    if(res.url==""||res.url==undefined||res.url==null){
                        window.location.href="page?command=management&username="+text+"&"+Date.now(),"_blank";
                    }else{
                        window.location.href = res.url+"&"+Date.now();
                    }

                }
            }

        }
    })
}
//function register(){
//    window.location.href="page?command=register";
//}
function doregister(){


//用户名
    var resgText = $('#resgText').val();
    //密码
    var resgPassword = $('#resgPassword').val();
    //姓名
    var resgName = $('#resgName').val();
//    //年龄
    var resgAge = $('#resgAge').val();
    //性别男
//    var sexB = $('#resgB').value();
//    //性别女
//    var sexG = $('#resgG').value();
    var sex = $("input[name='sex']:checked").val();
    //电话
    var resgPhone = $('#resgPhone').val();
    //国籍
    var resgCountry = $('#resgCountry').val();
    //头像
//    var getImage = document.getElementById("file0").files[0];
//    var getImage = $('#file0').val();

//    console.log("=======>>>>>>>>getImage",getImage);
    if(resgText==""||resgText==null||resgText==undefined){
        alert("请输入用户名");
    }
    if(resgPassword==""||resgPassword==null||resgPassword==undefined){
        alert("请输入密码");
    }
    if(resgName==""||resgName==null||resgName==undefined){
        alert("请输入姓名");
    }
    if(resgAge==""||resgAge==null||resgAge==undefined){
        alert("请输入年龄");
    }
    if(sex==""||sex==null||sex==undefined){
        alert("请选择性别");
    }
    if(resgPhone==""||resgPhone==null||resgPhone==undefined){
        alert("请输入电话号码");
    }
    if(resgCountry==""||resgCountry==null||resgCountry==undefined){
        alert("请输入国家");
    }
    if(resgText&&resgPassword&&resgName&&resgAge&&sex&&resgPhone&&resgCountry!=null||
        resgText&&resgPassword&&resgName&&resgAge&&sex&&resgPhone&&resgCountry!=""||
        resgText&&resgPassword&&resgName&&resgAge&&sex&&resgPhone&&resgCountry!=undefined){
        var fileObj = document.getElementById("file0").files[0];
        console.log("pppppppppfileObj",fileObj);
        if(fileObj==undefined||fileObj==""||fileObj==null){
            var json = {
                username:resgText,
                password:resgPassword,
                resgName:resgName,
                resgAge:resgAge,
                sex:sex,
                resgPhone:resgPhone,
                resgCountry:resgCountry
            }
            $.ajax({
                type:"POST",
                data:json,
                url:"interface?command=aloneRegister",
                success:function(res){
                    if(res.code==2){
                        alert("用户名已存在");
                    }
                    if(res.code==1){
                        //设置延时
                        window.setTimeout("window.location.href = 'page?command=login'",1000)
//                        window.location.href = 'page?command=login';
                    }

                }
            })
        }else {

            var FileController = "interface?command=testInsert";
            var form = new FormData();
            form.append("file1", fileObj);
            form.append("resgText", resgText);
            form.append("resgPassword", resgPassword);
            form.append("resgName", resgName);
            form.append("resgAge", resgAge);
            form.append("sex", sex);
            form.append("resgPhone", resgPhone);
            form.append("resgCountry", resgCountry);
            var xhr = new XMLHttpRequest();
            xhr.open("post", FileController, true);

            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {
                        var str = xhr.responseText;

                        console.log("ahhahahahahah!!!str.code", str.code);
                        var jsons = JSON.parse(xhr.responseText);
                        console.log("!!!!!@@@@@@@@jsons", jsons.code);
                        if (jsons.code == 2) {
                            alert("用户名已存在");
                        }
                        if (jsons.code == 1) {
                            window.location.href = "page?command=login";
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

var showPwd = $("#showPwd"), pwd = $("#password");
showPwd.focus(function(){
    pwd.show().focus();
    showPwd.hide();
});

pwd.blur(function(){
    if(pwd.val()=="") {
        showPwd.show();
        pwd.hide();
    }
});
//登陆注册界面
function click02(){
    var c1 = document.getElementById('loginMiss');
    var add = document.getElementById('upload');
    c1.style.display='none';
    add.style.display='none';
    var c2 = document.getElementById('registerMiss');
    c2.style.display="";
}
function click01(){
    var k1 = document.getElementById('registerMiss');
    var add = document.getElementById('upload');
    //none
    k1.style.display='none';
    add.style.display='none';
    var k2 = document.getElementById('loginMiss');
    k2.style.display="";
}
function click03(){
    var c1 = document.getElementById('loginMiss');
    var add = document.getElementById('upload');
    var k1 = document.getElementById('registerMiss');
    c1.style.display='none';
    k1.style.display='none';
    add.style.display="";

}
//上传图片
$("#file0").change(function(){
    var objUrl = getObjectURL(this.files[0]) ;
    console.log("objUrl = "+objUrl) ;
    if (objUrl) {
        $("#img0").attr("src", objUrl) ;
    }
}) ;
//建立一個可存取到該file的url
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }

    return url ;
}
//当鼠标离开时，判断用户名是否存在
function isLive(){
    var username = $('#resgText').val();
    $.ajax({
        type:"POST",
        data:{username:username},
        url:"interface?command=isLive",
        success:function(res){
            if(res.code==0){
                $('#isShow').text('');
            }else{
//                alert("用户名已存在");
                $('#isShow').text('用户名已存在');
            }

        }
    })
}
//回车绑定事件----注册
$(document).ready(function(){
    //回车事件绑定
    $('#resgCountry').bind('keyup', function(event) {
        if (event.keyCode == "13") {
            //回车执行查询
            $('#doregister').click();
        }
    });
});
//回车绑定事件----登陆
$(document).ready(function(){
    //回车事件绑定
    $('#icode').bind('keyup', function(event) {
        if (event.keyCode == "13") {
            //回车执行查询
            $('#dologin').click();
        }
    });
});

////上传压缩包
//function yasuo(){
//    var fileObj = document.getElementById('yasuo').files[0];
//    var FileController = "interface?command=yasuo";
//    var form = new FormData();
//    form.append();
//
//}
