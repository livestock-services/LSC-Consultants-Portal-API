const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const NutritionSchema = new mongoose.Schema({

        nutritionClientName:{
            type: String,
            required: true
        },
        nutritionClientPhoneNumber:{
            type:String,
            
        },

        nutritionClientLocation:{
            type:String,
           
        },

        nutritionClientTown:{
            type:String,
            
        },

        nutritionClientComments:{
            type:String,
            
        },

        nutritionCategory:{
            type: String,
            
        },

        nutritionOtherCategory:{
            type: String,
          
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


module.exports= mongoose.model("Nutrition", NutritionSchema);