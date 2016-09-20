var express = require('express');
var router = express.Router();
var mongo1 = require('mongodb').MongoClient;


/* Connect to db. */
router.get('/', function(req, res, next) {
 var url = 'mongodb://10.3.0.47:27017/nodehtml';

mongo1.connect(url, function(err, db) {


 db.collection('html').find().toArray(function(err, docs){

  db.collection('img').find().toArray(function(err,newdocs){
   res.render('dbconnect',{title:'DB Connected', DB:docs, imgs:newdocs});



  })




 })





}
)



}

)

;

module.exports = router;
