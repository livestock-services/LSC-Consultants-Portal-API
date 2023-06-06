
const mongoose = require('mongoose');
const moment = require('moment');
const tz = require ('moment-timezone');

const UserSchema = new mongoose.Schema({
     name:{
         type: String,
         required: true,
         max: 255,
         min: 2
     },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max:1024,
        min:8 
    },

    role: { 
        type: String,
        enum:['Admin','user','Manager','Vet Consultant','Agro Consultant','Lab Consultant','Nutrition Consultant','AI Consultant','Irrigation Consultant','Fence Consultant','Fish Consultant'],
        default:'user'
 
         }
    
});

module.exports= mongoose.model('Users', UserSchema);