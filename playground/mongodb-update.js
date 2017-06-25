const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
   if(err) {
     return console.log('Unable to connect to MongoDB server');       
   } else {

   }
   console.log('Connected to MongoDB server');

    //findOneAndDelete
   db.collection('Todos').findOneAndUpdate(
       {_id: new ObjectID('594ea99a155fd6ba5c0ddf78')
       } , { $set : { completed: true }}, {returnOriginal:false

         }).then((result)=> {
         console.log(result);
   })
   
  db.close();
});
