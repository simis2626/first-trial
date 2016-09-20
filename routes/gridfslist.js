/**
 * Created by Andromeda on 13/08/2016.
 */
var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;
var mongo2 = require('mongodb');
var mongoObject = require('mongodb').ObjectID;
var fs = require ('fs');
var multa = require('multer');
var multa1 = multa({inMemory:true});
var streamer = require('streamifier');


router.get('/get/:id', function(req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';

        mongo1.connect(url, function(err, db) {

                var findObjectId = new mongoObject.ObjectID(req.params.id);
                var searchJSON = {"_id": findObjectId };
                db.collection('fs.files').find(searchJSON).toArray(function(err,docs){
                        res.attachment(docs[0].filename);
                        var gridfs = new mongo2.GridFSBucket(db);
                        gridfs.openDownloadStream(findObjectId).pipe(res);


                });




        })});


router.get('/deleteEmployer/:id', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';

        mongo1.connect(url, function(err, db) {

                var findObjectId = new mongoObject.ObjectID(req.params.id);
                var searchJSON = {"_id": findObjectId };
                var gridfs = new mongo2.GridFSBucket(db);
                        gridfs.delete(findObjectId, function(){

                                res.redirect("/gridfslist");




                        });


                });




        });


router.post('/', multa1.single('data2'),function(req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';
        //console.log(req.file);

        mongo1.connect(url, function(err, db) {

//console.log(err);

                var gridfs = new mongo2.GridFSBucket(db);



                streamer.createReadStream(req.file.buffer).pipe(gridfs.openUploadStream(req.file.originalname).on('finish', function(){


                        res.redirect('back');
                }));});});






/* Connect to db. */
router.get('/', function(req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';

        mongo1.connect(url, function(err, db) {


                db.collection('fs.files').find().toArray(function(err, docs){
                    for (var yt = 0; yt < docs.length; yt++) {
                        docs[yt]._idDelete = "/gridfslist/deleteEmployer/" + docs[yt]._id;
                                docs[yt]._id = "/gridfslist/get/" + docs[yt]._id;


                        }
                        res.render('gridfslist',{title:'Stored Files', DB:docs});



                    });




                })
            }
        );







module.exports = router;
