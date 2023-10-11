const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon');
const array = require('@hapi/joi/lib/types/array');


const BioSubmissionsSch = new mongoose.Schema({
    bioSubmissionNumber: {
        type: String,
    },
    clientName: {
        type: String,
    },
    dateSubmitted: {
        type: String,
    },
    timeStamp: {
        type: String,
    },

    testUrgency:{
      type: String,
      
    },

    submittedBy:{
      type:String,
      
    },

    consultingVet:{
        type: String,
        
      },
  
      vetPhoneNumber:{
        type:String,
        
      },

      reportSentVia:{
        type: String,
        
      },
  
      animalLocation:{
        type:String,
        
      },

     // Add the fields here with default empty strings
     animalType: {
        type: String,
        default: "",
    },
    otherSampleType: {
        type: String,
        default: "",
    },
    otherAnimalType: {
        type: String,
        default: "",
    },
    breed: {
        type: String,
        default: "",
    },
    age: {
        type: String,
        default: "",
    },
    sex: {
        type: String,
        default: "",
    },
    sampleGoodOnReceipt: {
        type: String,
        default: "",
    },
    dateSampleCollected: {
        type: String,
        default: "",
    },

    totalNumberOfSamplesSubmitted:{
        type: String,
        default:""
    },

    totalNumberOfSamplesRejected:{
        type: String,
        default:""
    },

    presentingProblems:{
        type: String,
        default:""
    },
    testRequested: {
        type: String,
        default: "",
    },
    comments: {
        type: String,
        default: "",
    },
    labFindings: {
        type: String,
        default: "",
    },
    fecalInput: {
        type: String,
        default: "",
    },
    serumInput: {
        type: String,
        default: "",
    },
    semenInput: {
        type: String,
        default: "",
    },
    liverInput: {
        type: String,
        default: "",
    },
    swabsInput: {
        type: String,
        default: "",
    },
    skinScrapingsInput: {
        type: String,
        default: "",
    },
    urineInput: {
        type: String,
        default: "",
    },
    earSwabsInput: {
        type: String,
        default: "",
    },
    milkInput: {
        type: String,
        default: "",
    },
    impressionSmearInput: {
        type: String,
        default: "",
    },
    lymphnodeSmearInput: {
        type: String,
        default: "",
    },
    brainCrushSmearInput: {
        type: String,
        default: "",
    },
    wholeBloodInput: {
        type: String,
        default: "",
    },
    plasmaInput: {
        type: String,
        default: "",
    },
    bloodSmearInput: {
        type: String,
        default: "",
    },
    biopsyInput: {
        type: String,
        default: "",
    },
    carcassInput: {
        type: String,
        default: "",
    },
    abortedFetalInput: {
        type: String,
        default: "",
    },
    tissueOrganInput: {
        type: String,
        default: "",
    },
    feedSpecifyInput: {
        type: String,
        default: "",
    },
    otherInput: {
        type: String,
        default: "",
    },

    date: {
        type: String,
    },
    createdBy: {
        type: String,
    },

    receivedBy: {
      type: String,
     },

     samplesRequested: {
        type: Array
      },

    examsRequested: {
      type: Array
    },

    // Fields from bioSubmissionsForm
    clientAddress: {
        type: String,
    },
    clientEmail: {
        type: String,
    },
    clientContactNumber: {
        type: String,
    },
    // TestCount fields
    testCountHPE: {
        type: Number,
        default: 0,
    },
    testCountFEC: {
        type: Number,
        default: 0,
    },
    testCountHI: {
        type: Number,
        default: 0,
    },
    testCountMI: {
        type: Number,
        default: 0,
    },
    testCountET: {
        type: Number,
        default: 0,
    },
    testCountRBT: {
        type: Number,
        default: 0,
    },
    testCountBrucellosis: {
        type: Number,
        default: 0,
    },
    testCountChlamydia: {
        type: Number,
        default: 0,
    },
    testCountProFlok: {
        type: Number,
        default: 0,
    },
    testCountFBC: {
        type: Number,
        default: 0,
    },
    testCountPCV: {
        type: Number,
        default: 0,
    },
    testCountCDP: {
        type: Number,
        default: 0,
    },
    testCountUT: {
        type: Number,
        default: 0,
    },
    testCountCulture: {
        type: Number,
        default: 0,
    },
    testCountCS: {
        type: Number,
        default: 0,
    },
    testCountBCC: {
        type: Number,
        default: 0,
    },
    testCountBCS: {
        type: Number,
        default: 0,
    },
    testCountIS: {
        type: Number,
        default: 0,
    },
    testCountRVPT: {
        type: Number,
        default: 0,
    },
    testCountST: {
        type: Number,
        default: 0,
    },
    testCountFT: {
        type: Number,
        default: 0,
    },
    testCountLayers: {
        type: Number,
        default: 0,
    },
    testCountBovine: {
        type: Number,
        default: 0,
    },
    testCountSmallStock: {
        type: Number,
        default: 0,
    },
    testCountBroilers: {
        type: Number,
        default: 0,
    },
    testCountPig: {
        type: Number,
        default: 0,
    },
    testCountFreeRange: {
        type: Number,
        default: 0,
    },
    testCountFarmSample: {
        type: Number,
        default: 0,
    },
    testCountDisposables: {
        type: Number,
        default: 0,
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