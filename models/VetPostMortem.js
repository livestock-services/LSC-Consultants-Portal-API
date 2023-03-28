const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const VetPostMortemSchema = new mongoose.Schema({

        vetPostMortemClientName:{
            type: String,
            required: true
        },
        vetPostMortemClientPhoneNumber:{
            type:String,
            required:true
        },

        vetPostMortemClientLocation:{
            type:String,
            required:true
        },

        vetPostMortemClientTown:{
            type:String,
            required:true
        },

        vetPostMortemCategory:{
            type: String,
            required: true
        },

        vetPostMortemDiseases:{
            type: String,
            required: true
        },

        vetPMComments:{
            type: String,
            default:"Non"
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


module.exports= mongoose.model("Vet Post Mortems", VetPostMortemSchema);