/**
 * Created by Ralph on 26/07/2016.
 */



function doTheLoop(jsonArray, db, funcCallback){




        console.log("sausages");
    for (var i = 1; i < 900; i++) {
        jsonArray.push({
            EC: "Alisha",
            Date: "Today",
            notes: "Lorem ipsum dolor sit amet, fugit animal at mea, cum dicat putant eu. Cu alia conceptam eos, pro ex duis assueverit. Nec vero omnis illum no. Malis iracundia ut mei, quis aliquid ut nam, ne est ludus latine senserit. Sit lorem impedit vituperatoribus an. Et dicunt interpretaris sit. In assueverit deterruisset mel, paulo zril ubique ex vel, ius no prima moderatius posidonium. Usu id fierent referrentur. Paulo omittam sed te. Mel pertinacia adversarium ad, ex reque omittantur usu. Elitr integre percipit ea sed, brute percipit usu ei, te placerat oportere deterruisset est. No mea vero probo habeo.",
            followUpRequired: true,
            followUpDate: "tomorrow",
            dateAdded: "26/06/2016",
            clientsReferred: "Tommy and Jimmy",
            employerId: "57b5ae95d812330c49a8871d",
        });
    }
    funcCallback();




}
var mongo1 = require("mongodb").MongoClient;


mongo1.connect('mongodb://10.3.0.47:27017/marketing', function (err, db) {
    console.log(err);

    var insertJSON = [];

    doTheLoop(insertJSON, db, function (){

        db.collection('attempts').insertMany(insertJSON, function () {

            db.close();
            console.log("closed");
        });

        console.log("gogo");
    });








});

