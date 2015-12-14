/**
 * Created by tangtang on 14/11/9.
 */
$(document).ready(function(){
    $.ajax({
        type:"POST",
        data:{},
        url:"/interface?command=showMenu",
        success:function(res){
            if(res.code==0){
                alert("目前还没人点餐");
            }else{
                console.log("result-=-=-=>",res.result);
                $('#fillTable').empty();
                var tableHead = "<tr>"+
                        "<th>姓名</th>"+
                        "<th>已点菜单</th>"+
                        "</tr>"
                $('#fillTable').append(tableHead);
                for(var i=0;i<res.result.length;i++){
                    var allMenu = "<tr>"+
                            "<td>"+res.result[i].name+"</td>"+
                            "<td>"+res.result[i].txt+"</td>"+
                            "</tr>"
                    $('#fillTable').append(allMenu);
                }
            }
        }
    })
})