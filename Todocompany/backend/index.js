
const express = require('express');
const connection = require('./connection/connect');
const todoModel = require('./model/todoSchema');
const app = express();
app.use(express.json());


app.get('/todo',async(req,res)=>{

    let todos = await todoModel.find();

    res.send({
        todo : todos,
        response :200
    });
})

app.post('/todo',async(req,res)=>{
try {
  let todos = await todoModel.create(req.body);

   res.send({
    todo : todos,
      response : true
   })
} catch (error) {
  res.send(error);
}
  
})
app.delete('/todo/:id',async(req,res)=>{
  let{id} = req.params;
      try {
        await todoModel.findByIdAndDelete({id : id});

        res.send(req.params.id);
      } catch (error) {
         res.send(error);
      }
 
  })

  
  app.put('/todo',async(req,res)=>{

    try {
      const {id} = req.params;
       let obj = req.body;
      const todos = await blogModel.updateOne({id : id},{...obj})
      res.send({
          status : 200
      });
      
  } catch (error) {
      res.send({
          massage : error,
          status : 400
      })
  }
})

app.listen(8080,()=>{
    console.log("start server");
    connection();
})