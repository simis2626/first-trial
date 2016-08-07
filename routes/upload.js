var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;
var mongo2 = require('mongodb');
var fs = require ('fs');
var multa = require('multer');
var multa1 = multa({inMemory:true});


/* Connect to db. */

router.post('/', multa1.single('data2'),function(req, res, next) {
 var url = 'mongodb://10.3.0.47:27017/nodehtml';
 //console.log(req.file);
 console.log(req.body);

mongo1.connect(url, function(err, db) {

//console.log(err);

 var gridfs = new mongo2.GridFSBucket(db);
var buffer1 = Buffer.from(req.file.buffer);

console.log(buffer1);

buffer1.toJSON().pipe(gridfs.openUploadStream(req.file.originalname).on('finish', function(){


 res.render('index',{title:'Upload Successful'});
});





})});



module.exports = router;
