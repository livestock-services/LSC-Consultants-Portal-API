const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const FenceSchema = new mongoose.Schema({

        fenceClientName:{
            type: String,
            required: true
        },
        fenceClientPhoneNumber:{
            type:String,
            required:true
        },

        fenceClientLocation:{
            type:String,
            required:true
        },

        fenceClientTown:{
            type:String,
            required:true
        },

        fenceClientComments:{
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

module.exports= mongoose.model("Fence", FenceSchema);