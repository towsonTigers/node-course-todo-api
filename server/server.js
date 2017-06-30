var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

//var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res)=>{
  Todo.find().then((todos) => {
     res.send({todos})
  }, (e) => {
     res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;
  console.log("id: " + id);
  // if (!ObjectID.isValid()) {
  //   console.log("id is invalid");
  //   return res.status(404).send();
  // }
  
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })

});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};