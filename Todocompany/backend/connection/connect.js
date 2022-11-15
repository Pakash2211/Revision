const mongoose = require('mongoose');

const connection = () =>{

    return new Promise((resolve,reject)=>{
       mongoose.connect('mongodb://localhost:27017/todoapp').then(()=>{
         resolve();
         console.log('connect');
       }).catch(()=>{
        reject();
       })
 
    })
}


module.exports = connection;