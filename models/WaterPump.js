const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const WaterPumpSchema = new mongoose.Schema({

        waterPumpClientName:{
            type: String,
            required: true
        },
        waterPumpClientPhoneNumber:{
            type:String,
            required:true
        },

        waterPumpClientLocation:{
            type:String,
            required:true
        },

        waterPumpClientTown:{
            type:String,
            required:true
        },

        waterPumpClientComments:{
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

module.exports= mongoose.model("Water Pumps", WaterPumpSchema);