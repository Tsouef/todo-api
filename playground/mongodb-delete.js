const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').deleteMany({name: 'Thibault Souef'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a00438f2a62112e1e118e25")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  db.close();

});
