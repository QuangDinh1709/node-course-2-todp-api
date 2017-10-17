const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id : '59e5bff9d41fc80d46dd3588'}).then((doc) => {

});

// Todo.findByIdAndRemove('59e5bff9d41fc80d46dd3588').then((doc) => {
//   console.log(doc);
// });
