const mongoose = require('mongoose');

const todoSchema  = mongoose.Schema({
    task:String
})


const todoModel = mongoose.model('todos',todoSchema);
module.exports = todoModel;