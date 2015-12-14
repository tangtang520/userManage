/**
 * Created by tangtang on 14/11/9.
 */
$(document).ready(function(){
    $.ajax({
        type:"POST",
        data:{},
        url:"/interface?command=getTxtMenu",
        success:function(res){
            if(res.code==0){
                alert("目前还没人还没有人设置文字菜单，你可以查看一下图片菜单")
            }else{
               var string = res.result.txt;
                console.log("string--->>>",string);
                $('#getTxt').append(string);
            }
        }
    })
})