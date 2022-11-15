const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    task : String,
    done : Boolean,
    id : String
})

const todoModel = mongoose.model('todo',todoSchema);


module.exports = todoModel;