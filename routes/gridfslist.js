/**
 * Created by Andromeda on 13/08/2016.
 */
var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;


/* Connect to db. */
router.get('/', function(req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/nodehtml';

        mongo1.connect(url, function(err, db) {

                console.log(err);
                console.log("Connected Successfully");

                db.collection('fs.files').find().toArray(function(err, docs){
                        docs.forEach(id="/get"+_id)
                        res.render('gridfslist',{title:'Stored Files', DB:docs});



                    });




                })
            }
        );







module.exports = router;
