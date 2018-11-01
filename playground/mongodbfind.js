//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp')
//db.collection('Todos').find({
//  _id:new ObjectID('5bdaad2ef7e384fbf4d26c5f')
//}).toArray().then((docs)=>{
//console.log('Todos');
//console.log(JSON.stringify(docs,undefined,2));
//},(err)=>{
//  console.log('Unable to fetch Todos',err);
//});
// db.collection('Todos').find().count().then((count)=>{
// console.log('Todos count '+count);
// },(err)=>{
//   console.log('Unable to fetch Todos',err);
// });

db.collection('Users').find({name:'Himanshu Semwal'}).toArray().then((docs)=>{
  console.log('Users');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch Todos with name Sudhanshu Semwal');
});



  //client.close();


});
