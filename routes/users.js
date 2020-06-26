var mongoose = require('mongoose');
var plm = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost/GEM3',{ useNewUrlParser: true });


var adminModel= mongoose.Schema({
  username:String,
  name:String,
  isadmin:Boolean,
  password:String,
  expensename:[]
})

adminModel.plugin(plm);
module.exports=mongoose.model('user', adminModel);