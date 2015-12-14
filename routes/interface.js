/**
 * Created by tangtang on 14-8-6.
 */


exports.action = function(req,res){
    var command=req.param('command');
    if(command!=null){
        this[command](req,res);
    }else{
//        res.redirect('page?command=index');
        res.end();
    }
};



testInsert = require('../bin/login/login').testInsert;
match = require('../bin/login/login').match;
getAutoCode = require('../bin/login/login').getAutoCode;
//mangement界面获取数据
findInfo = require('../bin/login/login').findInfo;
getImage = require('../bin/login/getImage').getImage;
showImage = require('../bin/login/showImage').showImage;
//changeImage = require('../bin/login/changeImage').changeImage;
deleteData1 = require('../bin/login/deleteData').deleteData;
aloneRegister = require('../bin/login/aloneRegister').aloneRegister;
addAgainImage = require('../bin/login/addAgainImage').addAgainImage;
//management界面的删除
deleteLineData = require('../bin/login/deleteLineData').deleteLineData;
//当输入用户名 理解判断用户名是否存在
isLive = require('../bin/login/isLive').isLive;
//上传压缩包
dopackage = require('../bin/login/dopackage').dopackage;
//解压压缩包
lookPackage = require('../bin/login/lookPackage').lookPackage;
//读取文件内容
//showAllImage = require('../bin/login/showAllImage').showAllImage;
//下载压缩包
//downPackage = require('../bin/login/downPackage').downPackage;
//判断文件是否存在
fileisLive = require('../bin/login/fileisLive').fileisLive;
//计算文件个数
fileNum = require('../bin/login/fileNum').fileNum;
//删除数据接口
deleteData = require('../bin/login/deleteData').deleteData;
//删除解压出来的文件
deleteRubbish = require('../bin/login/deleteRubbish').deleteRubbish;
//存储总时间
getTimer = require('../bin/login/getTimer').getTimer;
//取得总时间
findTime = require('../bin/login/findTime').findTime;
//增加一个数据库表
dataBase = require('../bin/login/dataBase').dataBase;
//删除微信中文本菜单的内容
weixinDel = require('../bin/login/weixinDel').weixinDel;
//微信新人注册姓名与电话
weixinNewPer = require('../bin/login/weixinNewPer').weixinNewPer;
//微信上传蚊子菜单
weixinTxt = require('../bin/login/weixinTxt').weixinTxt;
//微信上传图片菜单
weixinImg = require('../bin/login/weixinImg').weixinImg;
//微信获取文本菜单
getTxtMenu = require('../bin/login/getTxtMenu').getTxtMenu;
//微信获取图片菜单
getImgMenu = require('../bin/login/getImgMenu').getImgMenu;
//获取公司所有的姓名
getAllPer = require('../bin/login/getAllPer').getAllPer;
//微信存储点餐信息（用户要吃的东西）
doWriteMenu = require('../bin/login/doWriteMenu').doWriteMenu;
//微信删除通讯录
delBook = require('../bin/login/delBook').delBook;
//显示点餐人的信息（姓名+餐品）
showMenu = require('../bin/login/showMenu').showMenu;
//清空info表中的所有数据
weixinInfoDel = require('../bin/login/weixinInfoDel').weixinInfoDel;
//删除图片菜单
weixinImgMenuDel = require('../bin/login/weixinImgMenuDel').weixinImgMenuDel;
//记录点餐人
callFoodPer = require('../bin/login/callFoodPer').callFoodPer;
//删除已点菜单
endMenu = require('../bin/login/endMenu').endMenu;
//在通讯录直接给某人发信息
sendTextInfo = require('../bin/login/sendTextInfo').sendTextInfo;
//删除今日点餐人
senMenuPer = require('../bin/login/senMenuPer').senMenuPer;
//全部变为未点餐
noDoMenu = require('../bin/login/noDoMenu').noDoMenu;
//观察一下info表中的数据
seeInfo = require('../bin/login/seeInfo').seeInfo;