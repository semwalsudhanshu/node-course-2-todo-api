
const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/models/Todo');
var id='5bdc3680f6be32287400697e';


Todo.find({
  _id:id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('Todos',todo);
});
Todo.findById(id).then((todo)=>{
if(!todo)
{
  return console.log('ID NOT FOUND');
}
  console.log('Todos',todo);
}).catch((e)=>{
  console.log(e);
});
