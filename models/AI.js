const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')

//---- AMENDED PERMIT APPLICATION SCHEMA---//
const BeefAI = new mongoose.Schema({

    beefAIClientName:{
        type: String,
        required: true
    },
    beefAIClientPhoneNumber:{
        type:String,
        required:true
    },

    beefAIClientLocation:{
        type:String,
        required:true
    },

    beefAIClientTown:{
        type:String,
        required:true
    },

    beefAIClientComments:{
        type:String,
        
    },

    beefAICategory:{
        type: String,
        required: true
    },

        date:{
            type: String,
            default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
        },

        createdBy:{
            type: String
          },
       
       
        
        
});


//--- PERMIT SCHEMA---------//

const PigAI = new mongoose.Schema({

    pigAIClientName:{
        type: String,
        required: true
    },
    pigAIClientPhoneNumber:{
        type:String,
        required:true
    },

    pigAIClientLocation:{
        type:String,
        required:true
    },

    pigAIClientTown:{
        type:String,
        required:true
    },

    pigAIClientComments:{
        type:String,
        
    },

   
        date:{
            type: String,
            default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
        }, 

        createdBy:{
            type: String
          },
       
  
   
    
    
});



const BeefAISchema = mongoose.model("Beef Artificial Insemination", BeefAI);

const PigAISchema = mongoose.model("Pig Artificial Insemination", PigAI)

module.exports = { BAIs: BeefAISchema, PAIs:PigAISchema }