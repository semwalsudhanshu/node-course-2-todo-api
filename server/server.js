var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');


var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/Todo.js');
var {User}=require('./models/User.js');


var app=express();
var port =process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo =new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos:todos});

  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  //  res.send(req.params);
  //validate id
  if(!ObjectID.isValid(id))
  {
    res.status(404).send();
  }
   Todo.findById(id).then((todo)=>{
     if(!todo)
     {
      return res.status(404).send();
     }
     res.send({todo:todo});
   }).catch((e)=>{
     res.status(400).send();
   });
  //findByid

});

app.listen(port,()=>{

  console.log('Server started on port '+port);
});

module.exports={
  app:app
};
 // var newTodo =new Todo({text:'Cook dinner'});
 // newTodo.save().then((doc)=>{
 //   console.log('Saved Todo',doc);
 // },(e)=>{
 //   console.log('Unable to save Todo');
 // })




 // var OtherTodo=new Todo({
 //   text:'        Edit the video          '
 // });
 // OtherTodo.save().then((doc)=>{
 //    console.log('Saved Todo ',JSON.stringify(doc,undefined,2));
 // },(e)=>{
 //   console.log('Unable to save the Todo ',e);
 // });


//
//  var newuser=new User({
//    text:'example@gmail.com'
//  });
// newuser.save().then((doc)=>{
//   console.log('SAVED USER',doc);
// },(e)=>{
//   console.log('Unable to save the user');
// });
// //save new Something
