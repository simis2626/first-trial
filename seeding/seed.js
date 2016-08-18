/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback){




        console.log("sausages");
    for (i = 1; i < 10; i++) {
        jsonArray.push({
            phoneNumber: "0359414367",
            contactPerson: {name: "Simon", notes: "Don't Call on Sunday"},
            address: "123 Wilmont Place",
            notes: "They like dessies",
            name: "burgers galore",
            doNotContact: true,
            positionsNeeded: "Sausages",
            publicTransport: true,
            dateAdded: "Date",
            wageSubFactsProvided: false
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

