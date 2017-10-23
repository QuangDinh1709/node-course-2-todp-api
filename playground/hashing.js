const {SHA256}  = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'password!';

bcrypt.genSalt(10, (err, salt) => {
  console.log('salt',salt);
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

// var hashPassword = '$2a$10$yRGfyRaYw.DJXSEJ2YaieuVs/5be1VELMO8cpLkS7SGFJwT/rCeI.';

// bcrypt.compare(password, hashPassword, (err,res) => {
//   console.log(res);
// });



// var data = {
//   id : 10
// };
//
// var token = jwt.sign(data, '123abc');
//
// console.log(token);
//
// var decode = jwt.verify(token, '123abc');
// console.log('decode',decode);


// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message :${message}`);
// console.log(`Hash : ${hash}`);
//
//
// var data = {
//   id: 4
// };
//
//
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecrect').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var reslutHash = SHA256(JSON.stringify(token.data) + 'somesecrect').toString();
//
// if(reslutHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust !');
// }
