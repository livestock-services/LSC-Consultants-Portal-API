const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const IrrigationSchema = new mongoose.Schema({

        irrigationClientName:{
            type: String,
            required: true
        },
        irrigationClientPhoneNumber:{
            type:String,
            required:true
        },

        irrigationClientLocation:{
            type:String,
            required:true
        },

        irrigationClientTown:{
            type:String,
            required:true
        },

        irrigationClientComments:{
            type:String,
            
        },

      

        date: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('MMMM, dddd Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },
       
        createdBy:{
            type: String
          },
       
        
        
});

module.exports= mongoose.model("Irrigation", IrrigationSchema);