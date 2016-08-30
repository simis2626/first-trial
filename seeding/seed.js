/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback){




        console.log("sausages");
    for (var i = 1; i < 5; i++) {
        jsonArray.push({
            phoneNumber: "Jimminy Crickets",
            contactPerson: {name: "Jimminy Crickets", notes: "Jimminy Crickets"},
            address: "Jimminy Crickets",
            notes: "Jimminy Crickets",
            name: "Jimminy Crickets",
            doNotContact: false,
            positionsNeeded: "Jimminy Crickets",
            publicTransport: true,
            dateAdded: "Jimminy Crickets",
            wageSubFactsProvided: true

        });
    }
    funcCallback();




}
var mongo1 = require("mongodb").MongoClient;


mongo1.connect('mongodb://10.3.0.47:27017/marketing', function (err, db) {
    console.log(err);

    var insertJSON = [];

    doTheLoop(insertJSON, db, function (){

        db.collection('employers').insertMany(insertJSON, function () {

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });








});

