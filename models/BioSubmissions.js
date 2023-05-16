const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const BioSubmissionsSch = new mongoose.Schema({

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


const CounterSch = new mongoose.Schema({

    id:{
        type: String,
        
    },

    seq:{
      type:Number  
    },
   
    createdBy:{
        type: String
      },
   
    
    
});

const BioSubmissionsSchema = mongoose.model("Bio Submissions", BioSubmissionsSch);

const CounterSchema = mongoose.model("Counter", CounterSch);

module.exports = { BS:BioSubmissionsSchema, CS:CounterSchema }