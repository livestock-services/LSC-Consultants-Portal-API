const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone');
const { number } = require('@hapi/joi');


const TAR = new mongoose.Schema({
    
    startDate: {
        type: String,
       
       
      },
    
    endDate: {
        type: String,
        
       
      },
     
});

module.exports = mongoose.model("Total Agro Records", TAR);