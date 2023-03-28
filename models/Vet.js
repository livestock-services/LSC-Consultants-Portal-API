const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const VetSchema = new mongoose.Schema({

        vetClientName:{
            type: String,
            required: true
        },
        vetClientPhoneNumber:{
            type:String,
            required:true
        },

        vetClientLocation:{
            type:String,
            required:true
        },

        vetCategory:{
            type: String,
            required: true
        },

        vetClientTown:{
            type:String,
            required:true
        },


        vetComments:{
            type: String,
            default:"Non"
        },

        date: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
         //  default: moment().tz("Africa/Lusaka").format('MMMM, dddd Do YYYY') 
         
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        createdBy:{
            type: String
          },
       
       
        
        
});


module.exports= mongoose.model("Vet", VetSchema);