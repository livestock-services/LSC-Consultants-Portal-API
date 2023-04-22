const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const BioSubmissionsSchema = new mongoose.Schema({

        bioSubmissionNumber:{
            type: String,
            
        },
        clientName:{
            type:String,
           
        },

        dateSubmitted:{
            type:String,
            
        },

       

       timeStamp:{
        type: String
        
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

module.exports= mongoose.model("Bio Submissions", BioSubmissionsSchema);