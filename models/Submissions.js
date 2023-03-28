const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const SubmissionsSchema = new mongoose.Schema({

    submissionsNumber:{
        type:String,
        default:"NIL"
    },

    clientName:{
        type:String,
        default:"NIL"
    },

    consultingVet:{
        type:String,
        default:"NIL"
    },

    vetPhoneNumber:{
        type:String,
        default:"NIL"
    },

    dateTimeReceived:{
        type:String,
        default:"NIL"
    },

    receivedBy:{
        type:String,
        default:"NIL"
    },

    submittedBy:{
        type:String,
        default:"NIL"
    },

    reportName:{
        type:String,
        default:"NIL"
    },

    address:{
        type:String,
        default:"NIL"
    },

    telPhoneNumber:{
        type:String,
        default:"NIL"
    },

    email:{
        type:String,
        default:"NIL"
    },

    reportSentVia:{
        type:String,
        default:"NIL"
    },

    siteLocation:{
        type: String,
        default:"NIL"
    },

    blood:{
        type: String,
        default:"NIL"
    },

    plasma:{
        type: String,
        default:"NIL"
    },

    serum:{
        type: String,
        default:"NIL"
    },

    bloodSmear:{
        type: String,
        default:"NIL"
    },

    impressionSmear:{
        type: String,
        default:"NIL"
    },

    lymphnodeSmear:{
        type: String,
        default:"NIL"
    },

    brainCrushSmear:{
        type: String,
        default:"NIL"
    },

    urine:{
        type: String,
        default:"NIL"
    },

    faecal:{
        type: String,
        default:"NIL"
    },

    milk:{
        type: String,
        default:"NIL"
    },

    semen:{
        type: String,
        default:"NIL"
    },

    trachealWashing:{
        type: String,
        default:"NIL"
    },

    swab:{
        type: String,
        default:"NIL"
    },

    skinScraping:{
        type: String,
        default:"NIL"
    },

    abortedOrFetal:{
        type: String,
        default:"NIL"
    },

    tissueOrOrgan:{
        type: String,
        default:"NIL"
    },

    biopsy:{
        type: String,
        default:"NIL"
    },

    carcass:{
        type: String,
        default:"NIL"
    },

    other:{
        type: String,
        default:"NIL"
    },

    totalNumberOfSamplesSubmitted:{
        type: String,
        default:"NIL"
    },

    totalNumberOfSamplesRejected:{
        type: String,
        default:"NIL"
    },

    presentingProblems:{
        type: String,
        default:"NIL"
    },

    exmainationRequested:{
        type: String,
        default:"NIL"
    },

    testUrgency:{
        type: String,
        default:"NIL"
    },

    submissionStatus:{
        type: String,
        default:"NIL"
    },

    invoiceNumber:{
        type: String,
        default:"NIL"
    },

      

        date: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('MMMM, dddd Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },
       
        createdBy:{
            type: String,
          },
       
        
        
});

module.exports= mongoose.model("Submissions", SubmissionsSchema);