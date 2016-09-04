/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback) {


    console.log("sausages");
    for (var i = 1; i < 2; i++) {
        jsonArray.push({
            password: "Password",
            consultantId: "57cbcb7892c79103840877a3"

        });

        /*jsonArray.push({
         userId: "sllev2",
         name: "Simon",
         admin:true

         });*/


    }
    funcCallback();


}
var mongo1 = require("mongodb").MongoClient;


mongo1.connect('mongodb://10.3.0.47:27017/marketing', function (err, db) {
    console.log(err);

    var insertJSON = [];

    doTheLoop(insertJSON, db, function () {

        db.collection('auths').insertMany(insertJSON, function () {

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });


});

