const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  options:[{desc:String,value:Number}]
});

module.exports = mongoose.model('ingredient',ingredientSchema);