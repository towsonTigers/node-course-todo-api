const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '59544ebd92b550162cd6b8d4';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos)=> {
    console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)=> {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo)=> {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e)=> console.log(e));

User.findById('5956a3f7d8da4c95e558bfc5').then(()=>{
  if(!user) {
      return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) =>{
  console.log(e);
});