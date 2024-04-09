const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    _id : {type: mongoose.Types.ObjectId},
    fullname: {type: String, required: true},
    email: { type: String , unique:true , required :true },
    password : {type: String , required : true},  
})

module.exports = mongoose.model('Users', usersSchema) 