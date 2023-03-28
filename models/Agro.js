const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const AgroSchema = new mongoose.Schema({

        clientName:{
            type: String,
            required: true
        },
        clientPhoneNumber:{
            type:String,
            required:true
        },

        clientLocation:{
            type:String,
            required:true
        },

        agroCategory:{
            type: String,
            required: true
        },

        clientTown:{
            type:String,
            required:true
        },

        clientComments:{
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

module.exports= mongoose.model("Agro", AgroSchema);