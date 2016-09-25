/**
 * Created by andromeda on 19/08/2016.
 */
var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;
var mongoObject = require('mongodb').ObjectID;
var bparser = require('body-parser');
var uuid = require('node-uuid');


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
            var data = JSON.parse(content);
            //data = JSON.parse(data);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            mongo1.connect(url, function (err, db) {
                db.collection('employers').insertOne(data.employer, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.send('{"employer":' + JSON.stringify(docs.ops[0]) + '}');
                })

            })
        });
    }
);
router.put('/employers', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            var data = JSON.parse(content);
            //data = JSON.parse(data);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            var findObjectId = new mongoObject.ObjectID(data.employer._id);
            data.employer._id = new mongoObject.ObjectID(data.employer._id);
            var searchJSON = {"_id": findObjectId};
            mongo1.connect(url, function (err, db) {
                db.collection('employers').replaceOne(searchJSON, data.employer, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.send('{"employer":' + JSON.stringify(docs) + '}');
                })

            })
        });
    }
);

router.post('/attempts', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            var data = JSON.parse(content);
            //data = JSON.parse(data);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            mongo1.connect(url, function (err, db) {
                db.collection('attempts').insertOne(data.attempt, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.send('{"attempt":' + JSON.stringify(docs.ops[0]) + '}');
                })

            })
        });
    }
);
router.put('/attempts', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            var data = JSON.parse(content);
            //data = JSON.parse(data);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            var findObjectId = new mongoObject.ObjectID(data.attempt._id);
            data.employer._id = new mongoObject.ObjectID(data.attempt._id);
            var searchJSON = {"_id": findObjectId};
            mongo1.connect(url, function (err, db) {
                db.collection('attempt').replaceOne(searchJSON, data.attempt, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.send('{"attempt":' + JSON.stringify(docs) + '}');
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

        mongo1.connect(url, function (err, db) {
            db.collection('employers').removeOne(searchJSON);
                res.sendStatus(200);
            })
        });

router.delete('/attempts/:employerId', function (req, res, next) {
    var url = 'mongodb://10.3.0.47:27017/marketing';
    var findObjectId = new mongoObject.ObjectID(req.params.employerId);
    var searchJSON = {"_id": findObjectId};
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

router.get('/attempts/consultant/:consultantUserID', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        mongo1.connect(url, function (err, db) {
            var searchJSON = {EC: req.params.consultantUserID};
            db.collection('attempts').find(searchJSON).toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(docs);
            })
        })
    }
);

router.post('/consultants', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            var data = JSON.parse(content);
            //data = JSON.parse(data);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            mongo1.connect(url, function (err, db) {
                db.collection('consultants').insertOne(data.consultant, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.send('{"consultant":' + JSON.stringify(docs.ops[0]) + '}');
                })

            })
        });
    }
);

router.get('/consultants', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        mongo1.connect(url, function (err, db) {
            db.collection('consultants').find({approved: true}).toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(docs);
            })
        })
    }
);
router.put('/consultants', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {


            var data = JSON.parse(content);
            console.log(data);

            var findObjectId = new mongoObject.ObjectID(data.consultantId);
            mongo1.connect(url, function (err, db) {
                db.collection('consultants').updateOne({_id: findObjectId}, {$set: {'approved': true}}, function (err, docs) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(docs);
                })
            })
        });
    }
);

router.get('/consultants/unapproved', function (req, res, next) {
        var url = 'mongodb://10.3.0.47:27017/marketing';
        mongo1.connect(url, function (err, db) {
            db.collection('consultants').find({approved: false}).toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(docs);
            })
        })
    }
);

router.post('/auth/token', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            // Assuming, we're receiving JSON, parse the string into a JSON object to return.
            var data = JSON.parse(content);
            var url = 'mongodb://10.3.0.47:27017/marketing';
            mongo1.connect(url, function (err, db) {
                var searchJSON = JSON.parse('{"authToken":"' + data.authToken + '"}');
                db.collection('authTokens').findOne(searchJSON, {comment: 'Sausages'}, function (err, docs) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    if (docs) {
                        res.send('{"SuccessfulAuth":' + true + ',"consultantId":"' + docs.consultant_Id + '"}');
                    } else {
                        res.send('{"SuccessfulAuth":' + false + '}');
                    }
                });

            });
        });
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
        mongo1.connect(url, function (err, db) {
            var searchJSON = JSON.parse('{"consultantId":"' + data.consultant._id + '"}');

            var checkval = data.password;
            db.collection('auths').findOne(searchJSON, {comment: 'Sausages'}, function (err, docs) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                response = docs.password == checkval;
                if (data.rememberMe && response) {
                    var authToken = uuid.v4();
                    res.send('{"SuccessfulAuth":' + response + ',"authToken":"' + authToken + '"}');

                    var findObjectId = new mongoObject.ObjectID(data.consultant._id);
                    var insertJSON = JSON.parse('{"consultant_Id":"' + findObjectId + '","authToken":"' + authToken + '"}');
                    db.collection('authTokens').insertOne(JSON.stringify(insertJSON), function (err, docs) {

                    });


                } else {
                    res.send('{"SuccessfulAuth":' + response + '}');
                }
            })


        })
    });
    }
);
router.put('/auth', function (req, res, next) {

        var content = '';

        req.on('data', function (data) {
            // Append data.
            content += data;
        });

        req.on('end', function () {
            // Assuming, we're receiving JSON, parse the string into a JSON object to return.
            var data = JSON.parse(content);
            var url = 'mongodb://10.3.0.47:27017/marketing';

            var checkval = data.password;
            mongo1.connect(url, function (err, db) {
                var searchJSON = JSON.parse('{"password":"' + checkval + '","consultantId":"' + data.consultantId + '"}');
                console.log(searchJSON);

                db.collection('auths').insertOne(searchJSON, {}, function (err, docs) {
                    console.log(err);
                    res.statusCode = 200;
                    res.send('{"SuccessfulAuth":true}')
                })


            })
        });
    }
);

module.exports = router;
