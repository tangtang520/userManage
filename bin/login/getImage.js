/**
* Created by tangtang on 14-8-27.
*/
var ProcessDBProvider = require('../../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
var fileProvider = new ProcessDBProvider('fs.files');
var chunksProvider = new ProcessDBProvider('fs.chunks');
var BinaryProvider=require("../../modules/BinaryProvider").BinaryProvider;

var ObjectID=require("mongodb").ObjectID;
var binaryProvider=new BinaryProvider();


exports.getImage = function (req, res) {
    var id = req.param('id');
    console.log("~~~~~~~~~~~~~id",id);
    if (id != null && id != undefined) {
        fileProvider.findOne({_id: new ObjectID(id)}, {}, function (err, result) {
            if (err || result == null || result == undefined) {
            } else {
                chunksProvider.findOne({'files_id': new ObjectID(id)}, {}, function (err, result) {
                    if (err || result == null || result == undefined) {
                    } else {
                        binaryProvider.read(new ObjectID(id), function (err, binaryData, fileType) {
                            if (err) {
                            }
                            else {
                                res.writeHead(200, {"Content-Type:": fileType});
                                res.write(binaryData, "binary");
                                res.end();
                            }
                        })
                    }
                })
            }
        })
    }
};

