/**
 * Created by tangtang on 14-8-22.
 */
//management.html中的分页
var pageNum = 5;
function loadData(data){
    $.ajax({
        type:"POST",
        data:data,
        url:"interface?command=findInfo",
        success:function(res){
            if(res.code==1){
                var allInfo = res.result;
                var current_num = document.getElementById('current_page').innerHTML; //当前页数
                $('#total').text(res.count);  //添加总页数
            console.log("=====>>>>>>>><<<<<<<<<",res.result);
                $('#fillTable').empty();
                var tableHead = "<tr>"+
                    "<th>顺&nbsp;&nbsp;序</th>"+
                    "<th>用户名</th>"+
                    "<th>姓&nbsp;&nbsp;名</th>"+
                    "<th>年&nbsp;&nbsp;龄</th>"+
                    "<th>性&nbsp;&nbsp;别</th>"+
                    "<th>电话号码</th>"+
                    "<th>国&nbsp;&nbsp;家</th>"+
                    "<th>详细信息</th>"+
                    "<th>删除数据</th>"
                    "</tr>";
                $('#fillTable').append(tableHead);
                for(var i=0;i<res.result.length;i++){
                    var tableAll = "<tr>"+
                        "<td>"+((current_num-1)*pageNum+(i+1))+"</td>"+
                        "<td>"+allInfo[i].username+"</td>"+
                        "<td>"+allInfo[i].resgName+"</td>"+
                        "<td>"+allInfo[i].resgAge+"</td>"+
                        "<td>"+allInfo[i].sex+"</td>"+
                        "<td>"+allInfo[i].resgPhone+"</td>"+
                        "<td>"+allInfo[i].resgCountry+"</td>"+
                        "<td><button style='color: blue' onclick='skiper(\""+allInfo[i]["username"]+"\")' >查看</button></td>"+
                        "<td><button style='color: blue' onclick='deleteLineData01(\""+allInfo[i]["username"]+"\")' >删除</button></td>"+
                        "</tr>"
                    $('#fillTable').append(tableAll);
                }
            }

        }
    })
}
//managemen.html 中详细信息 中的查看按钮，打开新界面
function skiper(username){
    console.log("555555w5555");
    //获取本页的username
    var usernameWeb = window.location.search.substr(1).split("=")[2].split('&')[0];
    if(usernameWeb==1){
        window.open("page?command=addInfo&username="+username+"&"+Date.now(),"_blank");
    }else{
        if(usernameWeb==username){
            window.open("page?command=addInfo&username="+username+"&"+Date.now(),"_blank");
        }else{
            alert("没有权限查看此信息");
        }
    }


    console.log("====>>>>username",username);
//    window.location.href = "page?command=info&username="+username;
    console.log("6666666666");
}
//删除数据
function deleteLineData01(username){
    var usernameWeb = window.location.search.substr(1).split("=")[2].split('&')[0];
    if(usernameWeb==1){
        if(window.confirm("确定要删除吗?")){
            $.ajax({
                type:"POST",
                data:{username:username},
                url:"interface?command=deleteLineData",
                success:function(res){
                    console.log("33333res.code",res.code);
                    if(res.code==0){
                        window.location.reload();
//                        document.getElementById(""+username+"").style.display="none";
                    }

                }
            })
        }else{
            return false;
        }
    }else{
        if(usernameWeb==username){
            if(window.confirm("确定要删除吗?")){
                $.ajax({
                    type:"POST",
                    data:{username:username},
                    url:"interface?command=deleteLineData",
                    success:function(res){
                        console.log("33333res.code",res.code);
                        if(res.code==0){
                            window.location.reload();
                        }

                    }
                })
            }else{
                return false;
            }
        }else{
            alert("没有权限删除此数据");
        }
    }
}
//查询按钮
function find(){
    datacurrent.type=$("#findChange").val();
    datacurrent.text=$('#findText').val();
    datacurrent.pageIndex=1;
    document.getElementById('current_page').innerHTML=1;
    loadData(datacurrent);
}
//键盘时间
$(document).ready(function(){
    $('#findText').bind('keyup',function(event){
        if(event.keyCode == '13'){
            $('#dododo').click();
        }
    })
})


//退出时记录总时间
function doexit(){
    var timenow = $('#txtTime').val();
    var allTime = $('#nowTime').val();
    console.log("allTime--->>>>",allTime);
    console.log("timenow---->>>",timenow);
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    $.ajax({
        type:"POST",
        data:{username:username,timenow:timenow},
        url:"interface?command=getTimer",
        success:function(res){



        }
    })
    window.location.href='page?command=login';

}
//计算总登录时间
$(document).ready(function(){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    var allTime = $('#nowTime').val();
    $.ajax({
        type:"POST",
        data:{username:username},
        url:"interface?command=findTime",
        success:function(res){
            if(res.code==1){

                var time = res.result.time;
                console.log("time---->>>>",time);
                if(time==undefined||time==null||time==""){
                    var hour01 = 0;
                    var minute01 = 0;
                    var second01 = 0;

                }else{
                    var hourzdd = time.split("时");
                    var secondzdd = time.split("分");
                    var  minutetry = time.split("时");
                    var minutezdd = minutetry[1].split("分");
//                //获取到了时
//                console.log("hourzdd--->>>>>",hourzdd[0]);
//                //获取到了秒
//                console.log("secondzdd--->>>>>",secondzdd[1]);
//                //获取到了分
//                console.log("minuteZdd---->>>>",minutezdd[0]);

                    var hour01 = parseInt(hourzdd[0]);
                    console.log("hour",hour01);
                    var minute01 = parseInt(minutezdd[0]);
                    console.log("minute",minute01);
                    var second01 = parseInt(secondzdd[1]);
                    console.log("second",second01);
                }


                function getTimerAll01(){

                    second01++;
                        if(second01>=60){

                            minute01++;
                            second01=0;
                        }
                        if(minute01>=60){

                            hour01++;
                            minute01=0;
                        }


                    hour01 = parseInt(hour01)>9 ? hour01:"0" + parseInt(hour01);
                    minute01 = parseInt(minute01)>9 ? minute01:"0" + parseInt(minute01);
                    second01 = parseInt(second01)>9 ? second01:"0" + parseInt(second01);
        document.getElementById('txtTime').value = hour01 + "时" + minute01 + "分" + second01 + "秒";
                }
                var tt01 = window.setInterval(function(){
                    getTimerAll01();
                },1000);



            }


        }

    })

})