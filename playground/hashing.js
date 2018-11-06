const {SHA256} = require('crypto-js');
const jwt =require('jsonwebtoken');
const bcrypt =require('bcryptjs');
var password ='123abc!';
// brcypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);
//   });
// });


var hashpassword ='$2a$10$8W5mh52x1WOun75cBsXr/ebphnkohTKcm5Fd6aq5oRPQ1MDpm.kmy';
bcrypt.compare(password,hashpassword,(err,res)=>{
  console.log(res);
});
// var data ={
//   id:10
// };
//
// var token = jwt.sign(data,'123abc');
// console.log(token);
// var decode=jwt.verify(token,'123abc');
// console.log(decode);
// var message ='i am user number 3';
// var hash =SHA256(message).toString();
// console.log('message',message);
// console.log('hash',hash);
//
// var data ={
//   id:4
// };
// var token ={
//   data:data,
//   hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
//
// var resulthash =SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if(resulthash===token.hash)
// {
//   console.log('DATA WAS NOT CHANGED');
// }
// else
//   { console.log("DATA WAS CHANGED");
//
//   }
