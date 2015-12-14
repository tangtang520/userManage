/**
 * Created by tangtang on 14/11/9.
 */
function zz(){
    console.log("1111");
    var sel = $('#fixOpin').val();
    console.log("sel--->>>",sel);
    var txt = $('#writeMenu').val();
    console.log("txt--->>>",txt);
    var img = $('#weixinImgMenu')[0].src;
    console.log("img--->>>",img);
    var text = $('#getTxt').text();
    console.log("text--->>>>",text);
    if(sel==null){
        alert("还没有人填写个人信息，不能点餐");
    }
    if(txt==""){
        alert("请填写你需要点的餐，写好点击确认即可");
    }
    if(((txt!="")&&(img!=""))||((txt!="")&&(text!=""))){
        $.ajax({
            type:"POST",
            data:{sel:sel,txt:txt},
            url:"/interface?command=doWriteMenu",
            success:function(res){
                if(res.code==1){
                    alert("点餐成功");
                }
            }
        })
    }
}
//图片点击放大缩小
function chgsize(e){
    if(e.getAttribute('big')&&e.getAttribute('big')=='1'){
        e.setAttribute('big','0');
        e.setAttribute('width','74');
    }else{
        e.setAttribute('big','1');
        e.setAttribute('width','300');
    }
}