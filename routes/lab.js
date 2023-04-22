const express = require('express');
const BioSubmissions = require('../models/BioSubmissions');
const FeedSubmissions = require('../models/FeedSubmissions');
const router = express.Router();
const SampleInformation = require('../models/SampleInformation');
const Submissions = require('../models/Submissions');
const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Lab Route is grafting!');

});




router.get('/sampleInfo/allSampleInformationRecords', async (req,res)=>{
   
    try {
        const allSampleInformations = await SampleInformation.find();
        res.json({
            

            status: 'Successfully retreived all Sample Information Consultations!',
            data: allSampleInformations
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/sampleInfo/addNewSampleInformationRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newSampleInformationConsult = new SampleInformation({
        
        submissionNumber: req.body.submissionNumber,
        sampleID: req.body.sampleID,
        sampleType: req.body.sampleType,
        animalType:req.body.animalType,
        breed:req.body.breed,
        age:req.body.age,
        sex:req.body.sex,
        sampleGoodOnReceipt:req.body.sampleGoodOnReceipt,
        dateSampleCollected:req.body.dateSampleCollected,
        testRequested:req.body.testRequested,
        comments:req.body.comments,
        labFindings:req.body.labFindings,  
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newSampleInformationConsult);
       
       const savedSampleInformationConsult = await newSampleInformationConsult.save();
         console.log(savedSampleInformationConsult);
             res.json({
                
                 Message: 'Successfully added a new lab Record !',
                 data: savedSampleInformationConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});


//-------------------------------------------------------------------DATA FILES/BIO DATA/SUBMISSIONS--------------------------------------------------------------------------------------//
router.get('/submissions', async (req,res)=>{
   
    res.send('Lab Route is grafting!');

 });



router.get('/submissions/allSubmissionsRecords', async (req,res)=>{
   
    try {
        const allSubmissions = await Submissions.find();
        res.json({
            

            status: 'Successfully retreived all Submissions!',
            data: allSubmissions
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/submissions/addNewSubmissionsRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newSubmissionsConsult = new Submissions({
        
            submissionsNumber:req.body.submissionsNumber,
            clientName:req.body.clientName,
            consultingVet:req.body.consultingVet,
            vetPhoneNumber:req.body.vetPhoneNumber,
            dateTimeReceived:req.body.dateTimeReceived,
            receivedBy:req.body.receivedBy,
            submittedBy:req.body.submittedBy,
            reportName:req.body.reportName,
            address:req.body.address,
            telPhoneNumber:req.body.telPhoneNumber,
            email:req.body.email,
            reportSentVia:req.body.reportSentVia,
            siteLocation:req.body.siteLocation,
            blood:req.body.blood,
            plasma:req.body.plasma,
            serum:req.body.serum,
            bloodSmear:req.body.bloodSmear,
            impressionSmear:req.body.impressionSmear,
            lymphnodeSmear:req.body.lymphnodeSmear,
            brainCrushSmear:req.body.brainCrushSmear,
            urine:req.body.urine,
            faecal:req.body.faecal,
            milk:req.body.milk,
            semen:req.body.semen,
            trachealWashing:req.body.trachealWashing,
            swab:req.body.swab,
            skinScraping:req.body.skinScraping,
            abortedOrFetal:req.body.abortedOrFetal,
            tissueOrOrgan:req.body.tissueOrOrgan,
            biopsy:req.body.biopsy,
            carcass:req.body.carcass,
            other:req.body.other,
            totalNumberOfSamplesSubmitted:req.body.totalNumberOfSamplesSubmitted,
            totalNumberOfSamplesRejected:req.body.totalNumberOfSamplesRejected,
            presentingProblems:req.body.presentingProblems,
            exmainationRequested:req.body.exmainationRequested,
            testUrgency:req.body.testUrgency,
            submissionStatus:req.body.submissionStatus,
            invoiceNumber:req.body.invoiceNumber,  
            date: newDate,
            createdBy:req.body.createdBy
        
                
        });

           
     
        console.log(newSubmissionsConsult);
       
       const savedSubmissionsConsult = await newSubmissionsConsult.save();
         console.log(savedSubmissionsConsult);
             res.json({
                
                 Message: 'Successfully added a new lab Record !',
                 data: savedSubmissionsConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});

//----------------------------------------------------------------------RECEIVING/ BIO SUBMISSIONS ---------------------------------------------------------//

router.get('/bioSubmissions', async (req,res)=>{
  
    res.send('Bio Submissions is grafting!');

});




router.get('/bioSubmissions/allBioSubmissions', async (req,res)=>{
   
    try {
        const allBioSubmissions = await BioSubmissions.find();
        res.json({
            

            status: 'Successfully retreived all Bio Submissions!',
            data: allBioSubmissions
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/bioSubmissions/addNewBioSubmission', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newBioSubmission = new BioSubmissions({
        
    
        bioSubmissionNumber:req.body.bioSubmissionNumber,
        clientName:req.body.clientName,
        dateSubmitted:req.body.dateSubmitted,
        timeStamp:req.body.timeStamp,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newBioSubmission);
       
       const savedBioSubmission = await newBioSubmission.save();
         console.log(savedBioSubmission);
             res.json({
                
                 Message: 'Successfully added a new lab Record !',
                 data: savedBioSubmission
             });
         } catch (err) {
              res.json({ message: err })
         }
});



//----------------------------------------------------------------------RECEIVING/ FEED SUBMISSIONS ---------------------------------------------------------//

router.get('/feedSubmissions', async (req,res)=>{
  
    res.send('Feed Submissions is grafting!');

});




router.get('/feedSubmissions/allFeedSubmissions', async (req,res)=>{
   
    try {
        const allFeedSubmissions = await FeedSubmissions.find();
        res.json({
            

            status: 'Successfully retreived all Feed Submissions!',
            data: allFeedSubmissions
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/feedSubmissions/addNewFeedSubmission', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newFeedSubmission = new FeedSubmissions({
        
            

        feedSubmissionNumber:req.body.feedSubmissionNumber,
        feedClientName:req.body.feedClientName,
        feedDescription:req.body.feedDescription,
        typeOfSample:req.body.typeOfSample,
        dateSubmitted:req.body.dateSubmitted,
        timeStamp:req.body.timeStamp,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newFeedSubmission);
       
       const savedFeedSubmission = await newFeedSubmission.save();
         console.log(savedFeedSubmission);
             res.json({
                
                 Message: 'Successfully added a new lab Record !',
                 data: savedFeedSubmission
             });
         } catch (err) {
              res.json({ message: err })
         }
});



 module.exports= router