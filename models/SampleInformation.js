const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const SampleInformationSchema = new mongoose.Schema({

        submissionNumber:{
            type: String,
            
        },
        sampleID:{
            type:String,
           
        },

        sampleType:{
            type:String,
            
        },

        animalType:{
            type:String,
           
        },

        breed:{
            type:String,
            
        },

        age:{
            type:String,
            
        },

        sex:{
            type:String,
            
        },

        sampleGoodOnReceipt:{
            type:String,
            
        },

        dateSampleCollected:{
            type:String,
            
        },

        testRequested:{
            type:String,
            
        },

        comments:{
            type:String,
            
        },

        labFindings:{
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

module.exports= mongoose.model("Sample Information", SampleInformationSchema);