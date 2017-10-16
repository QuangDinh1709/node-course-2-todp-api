// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connnect to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('59e49baad41fc80d46dd24b8')
  // }, {
  //   $set : {
  //     completed : true
  //   }
  // },
  // {
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('59e472a849117e2c1753f06e')
  }, {
    $set : {
      name : 'Andrew'
    },
    $inc : {
      age :  1
    }
  }, {
    returnOriginal : false
  }).then ((result) => {
    console.log(result);
  })
  // db.close();
});
