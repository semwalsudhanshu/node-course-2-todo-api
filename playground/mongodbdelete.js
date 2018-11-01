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
//DELETE MANY
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
//
//DELETE ONE
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });


//FIND ONE AND DELETE
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });


//DELETE USERS HAVING SAME NAME SUDHANSHU Semwal
// db.collection('Users').deleteMany({name:'Sudhanshu Semwal'}).then((result)=>{
//   console.log(result);
//
// });
//

//DELETE USER WITH NAME SARIKA SEMWAL USING __ID
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5bdaaa11c8171907e8f94038")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});

  //client.close();


});
