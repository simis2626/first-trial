/**
 * Created by andromeda on 19/08/2016.
 */
var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;
var mongoObject = require('mongodb').ObjectID;
var bparser = require('body-parser');


/* Connect to db. */
router.get('/employers', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        mongo1.connect(url, function (err, db) {
            db.collection('employers').find().toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(docs);
            })
        })
    }
);
router.post('/employers', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            // Assuming, we're receiving JSON, parse the string into a JSON object to return.
            console.log(content);
            var data = JSON.parse(content);
            //data = JSON.parse(data);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            console.log(data);
            mongo1.connect(url, function (err, db) {
                db.collection('employers').insertOne(data.employer, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    console.log(docs.ops[0]);
                    res.send('{"employer":' + JSON.stringify(docs.ops[0]) + '}');
                })

            })
        });
    }
);

/* Connect to db. */
router.delete('/employers/:employerId', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
         var findObjectId = new mongoObject.ObjectID(req.params.employerId);
         var searchJSON = {"_id": findObjectId };
    console.log('deleting ' + searchJSON.toString());
        mongo1.connect(url, function (err, db) {
            db.collection('employers').removeOne(searchJSON);
                res.sendStatus(200);
            })
        });

router.delete('/attempts/:employerId', function (req, res, next) {
    var url = 'mongodb://10.3.0.47:27017/marketing';
    var findObjectId = new mongoObject.ObjectID(req.params.employerId);
    var searchJSON = {"_id": findObjectId};
    console.log('deleting ' + searchJSON.toString());
    mongo1.connect(url, function (err, db) {
        db.collection('attempts').removeOne(searchJSON);
        res.sendStatus(200);
    })
});


router.get('/attempts/:employerID', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        mongo1.connect(url, function (err, db) {
            var searchJSON = {employerId: req.params.employerID};
            db.collection('attempts').find(searchJSON).toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(docs);
            })
        })
    }
);
router.get('/consultants', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        mongo1.connect(url, function (err, db) {
            db.collection('consultants').find().toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(docs);
            })
        })
    }
);


//router.use(bparser.json({ type: 'application/*+json' }));
router.post('/auth', function (req, res, next) {

    var content = '';

    req.on('data', function (data) {
        // Append data.
        content += data;
    });

    req.on('end', function () {
        // Assuming, we're receiving JSON, parse the string into a JSON object to return.
        var data = JSON.parse(content);
        var url = 'mongodb://10.3.0.47:27017/marketing';
        var response = false;
        console.log(content, data);
        mongo1.connect(url, function (err, db) {
            console.log(data.consultant._id);
            var searchJSON = JSON.parse('{"consultantId":"' + data.consultant._id + '"}');

            var checkval = data.password;
            db.collection('auths').findOne(searchJSON, {comment: 'Sausages'}, function (err, docs) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                response = docs.password == checkval;
                res.send('{"SuccessfulAuth":' + response + '}');
            })

        })
    });
    }
);

module.exports = router;
