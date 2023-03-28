const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const FishSchema = new mongoose.Schema({

        fishClientName:{
            type: String,
            required: true
        },
        fishClientPhoneNumber:{
            type:String,
            required:true
        },

        fishClientLocation:{
            type:String,
            required:true
        },

        fishClientTown:{
            type:String,
            required:true
        },

        fishClientComments:{
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

module.exports= mongoose.model("Fish", FishSchema);