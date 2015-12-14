/**
 * Created by tangtang on 14/11/9.
 */
function dosub(){
    var txt = $('#txt').val();
    var tel = $('#tel').val();
    var code =  $('#registerCode').val();
    if(txt==""){
        alert("姓名不能为空");
    }
    if(code.length!=28){
        alert("格式不正确");
    }
    if((txt!="")&&(code.length==28)){
        $.ajax({
            type:"POST",
            data:{txt:txt,tel:tel,code:code},
            url:"/interface?command=weixinNewPer",
            success:function(res){
                if(res.code==1){
                    alert("注册成功，你已获得点餐权限");
                }
                if(res.code==0){
                    alert("用户已存在，不能完成注册");
                }
            }
        })
    }
}
//检验注册码的长度是否为28
function getCode(){
    var code =  $('#registerCode').val();
    if(code.length!=28){
        alert("输入的验证码长度不匹配，请重新获得验证码");
    }else{

    }
}