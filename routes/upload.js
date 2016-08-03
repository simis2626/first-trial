var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;
var mongo2 = require('mongodb');
var fs = require ('fs');


/* Connect to db. */
router.use('/', function(req, res, next) {
 var url = 'mongodb://10.3.0.47:27017/nodehtml';

mongo1.connect(url, function(err, db) {

console.log(err);

 var gridfs = new mongo2.GridFSBucket(db);
 console.log(req.filedata.toString());
 fs.createReadStream(req.filedata).pipe(gridfs.openUploadStream('test')).on('finish',function(){


 console.log(
     'made it here'


 );
 res.render('index',{title:'Upload Successful'});
});




})});



module.exports = router;
