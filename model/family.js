var mongoose = require('mongoose');

const familySchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
   contact:{
        type: Number,
        required:true,
    },
    relation:{
        type: String,
        required:true,
    }
})

module.exports = mongoose.model("family",familySchema);