// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connnect to MongoDB server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('59e47e60d41fc80d46dd1688')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });


  // db.collection('Todos').find({}).count().then((count) => {
  //   console.log(`Todos count : ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({
    name : 'Quang Pham'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
  // db.close();
});
