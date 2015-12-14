/**
 * Created by tangtang on 14-8-6.
 */

//global.mongodbHost = '124.207.0.23'; //本地数据库
global.mongodbHost = 'localhost';
global.mongodbPort = 27017;        //数据库端口
global.mongodbDB = 'success';  //数据库名称
//global.mongodbHost = process.env.MONGO_PORT_27017_TCP_ADDR;
//global.mongodbPort = process.env.MONGO_PORT_27017_TCP_PORT;
//global.mongodbDB = "tang-server";
//global.downloadDomain = 'ch.dev.selcome.com';     //下载文件的域名
global.downloadDomain = 'localhost:3000';     //下载文件的域名
//global.apkFile=__dirname+'/../public/haveFile/';//apkFiles路径
//global.mongodbDB2 = 'miyu_process';  //程序数据库
global.seeImage = __dirname+'/../output/';