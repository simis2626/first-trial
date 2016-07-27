/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback){

    for (i=0;i<20;i++) {


        console.log("sausages");
        jsonArray.push({'name':'ostrich'+i,'code':i*50});

    }

    funcCallback();

}


var mongo1 = require("mongodb").MongoClient;


mongo1.connect('mongodb://localhost:27017/nodehtml', function(err, db){
    console.log(err);
   
    var insertJSON = [];

    doTheLoop(insertJSON, db, function (){

        db.collection('html').insertMany(insertJSON, function(){

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });








});
