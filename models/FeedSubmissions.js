const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const FeedSubmissionsSchema = new mongoose.Schema({

        feedSubmissionNumber:{
            type: String,
            
        },
        feedClientName:{
            type:String,
           
        },

        feedDescription:{
            type:String,
           
        },

        typeOfSample:{
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

module.exports= mongoose.model("Feed Submissions", FeedSubmissionsSchema);