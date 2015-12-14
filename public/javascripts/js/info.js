/**
 * Created by tangtang on 14-8-23.
 */
console.log("tttttttttttttt")
$(document).ready(function(){
    console.log("3333333333333333");
    var username = window.location.search.substr(1).split("=")[2].split('&')[0];
    console.log("4444444444444444");
    $.ajax({
        type:"POST",
        data:{username:username},
        url:"interface?command=showImage",
        success:function(res){
            console.log("11111111res",res.result.imageURL);
            if(res.code==1){
                var zddImage = 'http://'+res.result.imageURL;
//                var zddImage = res.result.imageURL;
                console.log("343434343434zddImage",zddImage);
                $('#myImage').attr("src",zddImage);
            }

        }
    })
})


