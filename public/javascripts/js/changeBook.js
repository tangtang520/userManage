/**
 * Created by tangtang on 14/11/9.
 */
//删除通讯录
function delBook(){
    var sel = $('#fixOpin').val();
    if(sel==null||sel==undefined||sel==""){

    }else{
        if(window.confirm("确定要删除吗?")){
            $.ajax({
                type:"POST",
                data:{sel:sel},
                url:"/interface?command=delBook",
                success:function(res){
                    console.log("code--->>>",res.code);
                    if(res.code==0){
                        window.location.reload();
                    }
                }
            })
        }else{
            return false;
        }
    }
}
//增加通讯录
function addBook(){
    window.location.href="/page?command=newPerMessage";
}
//给指定人发送信息
function sendPerInfo(){
    var name = $('#fixOpin').val();
    var text = $('#sendText').val();
    console.log("text--->>>",text);
    if(name==null){
        alert("还没有人注册个人信息")
    }
    if(text==""){
        alert("请填写你想发送的信息");
    }
    if(name!=null&&text!=""){
        $.ajax({
            type:"POST",
            data:{name:name,text:text},
            url:"/interface?command=sendTextInfo",
            success:function(res){
                if(res.code==1){
                    alert("发送成功");
                }
            }
        })
    }
}
