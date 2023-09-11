const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const AgroSchema = new mongoose.Schema({

        clientName:{
            type: String,
            
        },
        clientPhoneNumber:{
            type:String,
            
        },

        clientLocation:{
            type:String,
            
        },

        agroCategory:{
            type: String,
            
        },

        agroOther:{
            type: String,
            
        },

        clientTown:{
            type:String,
           
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