// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/anacondong", function(err, db) {
   if(err) { return console.dir(err); }

    var collection = db.collection('test');
    var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

    collection.insert(docs, {w:1}, function(err, result) {
    });

    //      collection.findOne({mykey:1}, function(err, item) {});



    collection.find().toArray(function(err, items) {
            console.log(items);
    });

  });