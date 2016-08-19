/**
 * Created by andromeda on 19/08/2016.
 */
var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient


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

router.get('/attempts/:employerID', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        var findObjectId = new mongoObject.ObjectID(req.params.employerID)
        var searchJSON = {_id: findObjectId};
        mongo1.connect(url, function (err, db) {
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
module.exports = router;
