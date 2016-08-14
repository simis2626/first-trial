/**
 * Created by Andromeda on 13/08/2016.
 */
var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;
var mongo2 = require('mongodb');
var mongoObject = require('mongodb').ObjectID;



router.get('/get/:id', function(req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';

        mongo1.connect(url, function(err, db) {

                var findObjectId = new mongoObject.ObjectID(req.params.id);
                console.log(findObjectId);

                var gridfs = new mongo2.GridFSBucket(db);
                gridfs.openDownloadStream(findObjectId).pipe(res);



        })});



/* Connect to db. */
router.get('/', function(req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';

        mongo1.connect(url, function(err, db) {

                console.log(err);
                console.log("Connected Successfully");

                db.collection('fs.files').find().toArray(function(err, docs){
                        for( var yt=0; yt<docs.length; yt++){
                                docs[yt]._id = "/gridfslist/get/" + docs[yt]._id;


                        }
                        res.render('gridfslist',{title:'Stored Files', DB:docs});



                    });




                })
            }
        );







module.exports = router;
