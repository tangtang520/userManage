/**
 * Created by tangfengyuan on 14-9-27.
 */
//记录时间显示
var hour = 0;
var minute = 0;
var second = 0;
function getTimer(){
    second++;
    if(second>=60){
        second=0;
        minute++;
    }
    if(minute>=60){
        minute=0;
        hour++;
    }

    hour = parseInt(hour)>9 ? hour:"0" + parseInt(hour);
    minute = parseInt(minute)>9 ? minute:"0" + parseInt(minute);
    second = parseInt(second)>9 ? second:"0" + parseInt(second);
//        document.getElementById('txtTime').value = hour + "时" + minute + "分" + second + "秒";
    document.getElementById('nowTime').value = hour + "时" + minute + "分" + second + "秒";
//        $('#txtTime').innerHTML =  hour + "时" + minute + "分" + second + "秒";
}
var tt = window.setInterval("getTimer()",1000);