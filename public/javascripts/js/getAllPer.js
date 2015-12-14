/**
 * Created by tangtang on 14/11/9.
 */
$(document).ready(function(){
    $.ajax({
        type:"POST",
        data:{},
        url:"/interface?command=getAllPer",
        success:function(res){
            if(res.code==0){
                alert("列表为空");
            }else{
                console.log("--->>>",res.result[0]);
                $('#fixOpin').empty();
                for(var i=0;i<res.result.length;i++){
                    var allPer = "<option>"+res.result[i].name+"</option>"
                    $('#fixOpin').append(allPer);
                }

            }
        }
    })
})