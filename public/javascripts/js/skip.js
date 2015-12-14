/**
 * Created by tangtang on 14-8-22.
 */
var datacurrent={};
$(document).ready(function(){
    datacurrent={type:"",text:"",pageIndex:1};
    loadData(datacurrent);
})


$(document).ready(function(){

    //首页
    $('#firstPage').click(function(){
        var current_num=document.getElementById('current_page').innerHTML;//当前页数
        var total_page= document.getElementById('total').innerHTML//总页数
        $("#current_page").text(1);
        datacurrent.pageIndex=1;
        //这里接受了management.html中下拉单中的value的值与输入文本框中的值，然后通过loadData方法传到后台
//        datacurrent.type=$("#choose").val();
//        datacurrent.text=$('#text').val();
        datacurrent.type = $('findChange').val();
        datacurrent.text = $('findText').val();
        loadData(datacurrent);
    });
    //上一页方法
    $('#prev').click(function(){
        var current_num=document.getElementById('current_page').innerHTML;//当前页数
        var total_page= document.getElementById('total').innerHTML//总页数
        if(current_num==1)
        {
            return false;
        } else
        {
            var nextPage=parseInt(current_num)-1;
            $("#current_page").text(nextPage);
            datacurrent.pageIndex=nextPage;
//            datacurrent.type=$("#choose").val();
//            datacurrent.text=$('#text').val();
            datacurrent.type = $('findChange').val();
            datacurrent.text = $('findText').val();
            loadData(datacurrent);
        }
    });
    //下一页
    $('#nextPage').click(function(){
        var current_num=document.getElementById('current_page').innerHTML;//当前页数
        var total_page= document.getElementById('total').innerHTML//总页数
        console.log("current_num---->>",current_num)
        console.log(current_num,total_page);
        if(current_num==total_page){
            return false;//如果大于总页数就禁用下一页
        }
        else{
            var nextPage=parseInt(current_num)+1;
            var nextPage1=current_num+1;
            console.log("current_num-->>",current_num++,nextPage1,nextPage,typeof current_num);
            $("#current_page").text(nextPage);//点击下一页的时候当前页数的值就加1
            datacurrent.pageIndex=nextPage;
//            datacurrent.type=$("#choose").val();
//            datacurrent.text=$('#text').val();
            datacurrent.type = $('findChange').val();
            datacurrent.text = $('findText').val();
            loadData(datacurrent);
        }
    });
    //尾页
    $('#lastPage').click(function(){
        var current_page1=$('#current_page').val();
        console.log("current_page1---",current_page1)
        var current_num=document.getElementById('current_page').innerHTML;//当前页数
        var total_page= document.getElementById('total').innerHTML//总页数
        $("#current_page").text(total_page);
        datacurrent.pageIndex=total_page;
//        datacurrent.type=$("#choose").val();
//        datacurrent.text=$('#text').val();
        datacurrent.type = $('findChange').val();
        datacurrent.text = $('findText').val();
        loadData(datacurrent);

    });
    //跳转
    $('#jumpPage').click(function(){
        var pageindex=$('#pageindex').val();
        if(pageindex==null || pageindex=="")
        {
            alert("请选择跳转页面");
            return false;
        }else{
            var current_num=document.getElementById('current_page').innerHTML;//当前页数
            var total_page= document.getElementById('total').innerHTML//总页数
            console.log("11",pageindex,total_page);
            console.log("22",total_page-pageindex,typeof total_page-pageindex);
            if(parseInt(pageindex)>0&&parseInt(pageindex-total_page)<=0){
                console.log("1")
                $("#current_page").text(pageindex);
                datacurrent.pageIndex=pageindex;
//                datacurrent.type=$("#choose").val();
//                datacurrent.text=$('#text').val();
                datacurrent.type = $('findChange').val();
                datacurrent.text = $('findText').val();
                loadData(datacurrent);
            }else{
                console.log("2");
                return false;
            }

        }

    })
});
//开头跳转问题
function tah(i){
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    switch(i){
        case 1:
            window.location.href = "page?command=management&username="+username+"&"+Date.now(),"_blank";
            break;
        case 2:
            window.location.href = "page?command=dataManagement&username="+username+"&"+Date.now(),"_blank";
    }

}
