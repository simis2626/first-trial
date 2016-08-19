/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback){




        console.log("sausages");
    for (i = 1; i < 3; i++) {
        jsonArray.push({
            userId: "llev" + i,
            name: "Simon",
            password: "password"
        });
    }
    funcCallback();




}
var mongo1 = require("mongodb").MongoClient;


mongo1.connect('mongodb://10.3.0.47:27017/marketing', function (err, db) {
    console.log(err);

    var insertJSON = [];

    doTheLoop(insertJSON, db, function (){

        db.collection('consultants').insertMany(insertJSON, function () {

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });








});

