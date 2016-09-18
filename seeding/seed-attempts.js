/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback) {


    console.log("sausages");
    for (var i = 1; i < 40; i++) {
        jsonArray.push({
            EC: "Sausages",
            Date: "Sausages",
            notes: "Sausages",
            followUpRequired: true,
            followUpDate: "Sausages",
            dateAdded: "Sausages",
            clientsReferred: "Sausages",
            employerId: "57c80eb703b93e156cdc2947"

        });
    }
    funcCallback();


}
var mongo1 = require("mongodb").MongoClient;


mongo1.connect('mongodb://10.3.0.47:27017/marketing', function (err, db) {
    console.log(err);

    var insertJSON = [];

    doTheLoop(insertJSON, db, function () {

        db.collection('attempts').insertMany(insertJSON, function () {

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });


});

