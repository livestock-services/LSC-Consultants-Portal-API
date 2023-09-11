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
    date: {
        type: String,
    },
    createdBy: {
        type: String,
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