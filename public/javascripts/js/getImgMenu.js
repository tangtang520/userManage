/**
 * Created by tangtang on 14/11/9.
 */
$(document).ready(function(){
    $.ajax({
        type:"POST",
        data:{},
        url:"/interface?command=getImgMenu",
        success:function(res){
            if(res.code==0){
                alert("目前还没有人设置图片菜单，你可以查看一下文本菜单");
            }else{
                var url ='http://' + res.result.imageURL;
                $('#weixinImgMenu').attr("src",url);
            }
        }
    })
})