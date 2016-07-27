/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback){

    for (i=0;i<20;i++) {


        console.log("sausages");
        jsonArray.push({'name':'ostrich'+i,'code':i*50});

    }

    setTimeout(funcCallback() ,2000);


}


var mongo1 = require("mongodb").MongoClient;
var db = require("mongodb").db;

mongo1.connect('mongodb://10.3.0.47:27017/nodehtml', function(err, db){
    console.log("err");
    if err !== null return;

    var insertJSON = [];

    doTheLoop(insertJSON, db, function (){

        db.collection('html').insertMany(insertJSON, function(db){

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });








});
