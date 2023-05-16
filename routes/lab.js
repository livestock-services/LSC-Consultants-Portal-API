const express = require('express');
const BioSubmissions = require('../models/BioSubmissions');
const FeedSubmissions = require('../models/FeedSubmissions');
const router = express.Router();
const SampleInformation = require('../models/SampleInformation');
const Submissions = require('../models/Submissions');
const verify = require('./verifyToken');
const { NMs, FFs, SEs, MEs, SCs} = require('../models/FeedData')
var sequential = require("sequential-ids");
const mongoose = require('mongoose');
const { CS, BS } = require('../models/BioSubmissions');
const { FS, FCS } = require('../models/FeedSubmissions');
require('dotenv').config();
var generatorA = new sequential.Generator({port: 88});


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
     
     
        const allBioSubmissions = await BS.find();
        res.json({
            

            status: 'Successfully retreived all Bio Submissions!',
            data: allBioSubmissions
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/bioSubmissions/addNewBioSubmission', (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    const newTimeStamp =  (req.body.date).toLocaleTimeString('en-US');
   
    
            
    

      CS.findOneAndUpdate(
            {id:"autoval"},
            {"$inc":{"seq":1}},
            {new:true},(err,cd)=>{
    
                let seqId;
    
    
                if(cd==null){
                    const newval = new CS({
                        id:"autoval", seq:1
                    })
    
                    newval.save();
                    seqId = 1
                } else{
                    seqId = cd.seq
                }

                const newBioSubmission = new BS({
        
    
                    bioSubmissionNumber:seqId,
                    clientName:req.body.clientName,
                    dateSubmitted:newDate,
                    timeStamp:newTimeStamp,
                    createdBy:req.body.createdBy
                   
                            
                    });

                    console.log(newBioSubmission);
                    const savedBioSubmission = newBioSubmission.save();
                      console.log(savedBioSubmission);
                       res.json({
                
                 Message: 'Successfully added a new lab Record !',
                 data: savedBioSubmission
             });

            
            }
        );


    
       
});



//----------------------------------------------------------------------RECEIVING/ FEED SUBMISSIONS ---------------------------------------------------------//

router.get('/feedSubmissions', async (req,res)=>{
  
    res.send('Feed Submissions is grafting!');

});




router.get('/feedSubmissions/allFeedSubmissions', async (req,res)=>{
   
    try {
        const allFeedSubmissions = await FS.find();
        res.json({
            

            status: 'Successfully retreived all Feed Submissions!',
            data: allFeedSubmissions
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/feedSubmissions/addNewFeedSubmission', (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    const newTimeStamp =  (req.body.date).toLocaleTimeString('en-US');
    

    FCS.findOneAndUpdate(
        {id:"autoval"},
        {"$inc":{"seq":1}},
        {new:true},(err,cd)=>{

            let seqId;


            if(cd==null){
                const newval = new FCS({
                    id:"autoval", seq:1
                })

                newval.save();
                seqId = 1
            } else{
                seqId = cd.seq
            }

            const newFeedSubmission = new FS({
        
            

                feedSubmissionNumber:seqId,
                feedClientName:req.body.feedClientName,
                feedDescription:req.body.feedDescription,
                typeOfSample:req.body.typeOfSample,
                dateSubmitted:newDate,
                timeStamp:newTimeStamp,
                date: newDate,
                createdBy:req.body.createdBy
               
                        
                });
        
                   
             
                console.log(newFeedSubmission);
               
               const savedFeedSubmission = newFeedSubmission.save();
                 console.log(savedFeedSubmission);
                     res.json({
                        
                         Message: 'Successfully added a new lab Record !',
                         data: savedFeedSubmission
                     });

        
        }
    );
    
});


//------------------------------------------------------FEED DATA------------------------------------------------------------------------------------//

//------------------------------------------------------No. 3 MEAL ---------------------------------------------------------------//

router.get('/feedData/NM', async (req,res)=>{
   
    try {
        const allNMs = await NMs.find();
        res.json({
            

            status: 'Successfully retreived all No.3 Meal Records!',
            data: allNMs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });



router.post('/feedData/addNewNM', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newNM = new NMs({
        
            

            nmDateOfSampleCollected:req.body.nmDateOfSampleCollected,
                
            nmTimeOfReceipt:req.body.nmTimeOfReceipt,

            nmSubmissionNumber:req.body.nmSubmissionNumber,

            nmSupplierName:req.body.nmSupplierName, 

            nmNRC:req.body.nmNRC,
    
            nmVehicleRegNumber:req.body.nmVehicleRegNumber,

            nmTelNumber:req.body.nmTelNumber, 

            nmEmail:req.body.nmEmail, 

            nmSampleID:req.body.nmSampleID,

            nmTypeOfSample:req.body.nmTypeOfSample,

            nmSiteLocation:req.body.nmSiteLocation, 

            nmNumberOfBagsPerTonnage:req.body.nmNumberOfBagsPerTonnage,

            nmNumberOfBagsSampled:req.body.nmNumberOfBagsSampled,

            nmColor:req.body.nmColor,

            nmSmell:req.body.nmSmell,

            nmTexture:req.body.nmTexture,

            nmForeignBodies:req.body.nmForeignBodies,

            nmWeevilsOrInsects:req.body.nmWeevilsOrInsects, 

            nmBranContent:req.body.nmBranContent,

            nmGritContent:req.body.nmGritContent,

            nmPowderContent:req.body.nmPowderContent,

            nmOther:req.body.nmOther,

            nmMoisture:req.body.nmMoisture,

            nmTechnician:req.body.nmTechnician,

            nmQualitativeScore:req.body.nmQualitativeScore,

            nmFinalVerdict:req.body.nmFinalVerdict,

            nmReasonForVerdict:req.body.nmReasonForVerdict,

            nmOtherReason:req.body.nmOtherReason, 

            nmNumberOfBagsOrTonnageSelected:req.body.nmNumberOfBagsOrTonnageSelected,

            nmNumberOfBagsOrTonnageRejected:req.body.nmNumberOfBagsOrTonnageRejected,

            date: newDate,

            createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newNM);
       
       const savedNM = await newNM.save();
         console.log(savedNM);
             res.json({
                
                 Message: 'Successfully added a No. 3 Meal Record !',
                 data: savedNM
             });
         } catch (err) {
              res.json({ message: err })
         }
});

//-----------------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------SOYA FF -------------------------------------------------------//
router.get('/feedData/FF', async (req,res)=>{
   
    try {
        const allFFs = await FFs.find();
        res.json({
            

            status: 'Successfully retreived all Soya FF Records!',
            data: allFFs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 router.post('/feedData/addNewFF', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newFF = new FFs({
        
            

            ffDateReceived:req.body.ffDateReceived,

            ffReceivedBy:req.body.ffReceivedBy,

            ffTimeOfReceipt:req.body.ffTimeOfReceipt,

            ffSubmissionNumber:req.body.ffSubmissionNumber,

            ffSupplierName:req.body.ffSupplierName, 

            ffNRC:req.body.ffNRC,

            ffTelNumber:req.body.ffTelNumber, 

            ffDescription:req.body.ffDescription,

            ffSiteLocation:req.body.ffSiteLocation, 

            ffSampleID:req.body.ffSampleID,

            ffSamplePackaging:req.body.ffSamplePackaging,

            ffSampleLabelling:req.body.ffSampleLabelling,

            ffSampleCondition:req.body.ffSampleCondition,

            ffTestRequested:req.body.ffTestRequested,

            ffColor:req.body.ffColor,

            ffSmell:req.body.ffSmell,

            ffTexture:req.body.ffTexture,

            ffForeignBodies:req.body.ffForeignBodies,

            ffOther:req.body.ffOther,

            ffQualitativeScore:req.body.ffQualitativeScore ,

            ffAntiTrypsinTest:req.body.ffAntiTrypsinTest ,

            ffMoisture:req.body.ffMoisture,

            ffProtein:req.body.ffProtein,

            ffFat:req.body.ffFat,

            ffFibre:req.body.ffFibre, 

            ffAsh:req.body.ffAsh,

            ffNutritionistComment:req.body.ffNutritionistComment,

            ffSecondComment:req.body.ffSecondComment,

            date: newDate,

            createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newFF);
       
       const savedFF = await newFF.save();
         console.log(savedFF);
             res.json({
                
                 Message: 'Successfully added a new Soya FF Record !',
                 data: savedFF
             });
         } catch (err) {
              res.json({ message: err })
         }
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------SOYA SE -------------------------------------------------------//
router.get('/feedData/SE', async (req,res)=>{
   
    try {
        const allSEs = await SEs.find();
        res.json({
            

            status: 'Successfully retreived all Soya SE Records!',
            data: allSEs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 router.post('/feedData/addNewSE', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newSE = new SEs({
        
            

            seDateReceived:req.body.seDateReceived,

            seReceivedBy:req.body.seReceivedBy,

            seTimeOfReceipt:req.body.seTimeOfReceipt,

            seSubmissionNumber:req.body.seSubmissionNumber,

            seSupplierName:req.body.seSupplierName, 

            seNRC:req.body.seNRC,

            seTelNumber:req.body.seTelNumber, 

            seDescription:req.body.seDescription,

            seSiteLocation:req.body.seSiteLocation, 

            seSampleID:req.body.seSampleID,

            seSamplePackaging:req.body.seSamplePackaging,

            seSampleLabelling:req.body.seSampleLabelling,

            seSampleCondition:req.body.seSampleCondition,

            seTestRequested:req.body.seTestRequested,

            seColor:req.body.seColor,

            seSmell:req.body.seSmell,

            seTexture:req.body.seTexture,

            seForeignBodies:req.body.seForeignBodies,

            seOther:req.body.seOther,

            seQualitativeScore:req.body.seQualitativeScore ,

            seAntiTrypsinTest:req.body.seAntiTrypsinTest ,

            seMoisture:req.body.seMoisture,

            seProtein:req.body.seProtein,

            seFat:req.body.seFat,

            seFibre:req.body.seFibre, 

            seAsh:req.body.seAsh,

            seNutritionistComment:req.body.seNutritionistComment,

            seSecondComment:req.body.seSecondComment,

            date: newDate,

            createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newSE);
       
       const savedSE = await newSE.save();
         console.log(savedSE);
             res.json({
                
                 Message: 'Successfully added a new Soya SE Record !',
                 data: savedSE
             });
         } catch (err) {
              res.json({ message: err })
         }
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------//



//--------------------------------------------------------SOYA ME -------------------------------------------------------//
router.get('/feedData/ME', async (req,res)=>{
   
    try {
        const allMEs = await MEs.find();
        res.json({
            

            status: 'Successfully retreived all Soya ME Records!',
            data: allMEs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 router.post('/feedData/addNewME', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newME = new MEs({
        
            

            meDateReceived:req.body.meDateReceived,

            meReceivedBy:req.body.meReceivedBy,

            meTimeOfReceipt:req.body.meTimeOfReceipt,

            meSubmissionNumber:req.body.meSubmissionNumber,

            meSupplierName:req.body.meSupplierName, 

            meNRC:req.body.meNRC,

            meTelNumber:req.body.meTelNumber, 

            meDescription:req.body.meDescription,

            meSiteLocation:req.body.meSiteLocation, 

            meSampleID:req.body.meSampleID,

            meSamplePackaging:req.body.meSamplePackaging,

            meSampleLabelling:req.body.meSampleLabelling,

            meSampleCondition:req.body.meSampleCondition,

            meTestRequested:req.body.meTestRequested,

            meColor:req.body.meColor,

            meSmell:req.body.meSmell,

            meTexture:req.body.meTexture,

            meForeignBodies:req.body.meForeignBodies,

            meOther:req.body.meOther,

            meQualitativeScore:req.body.meQualitativeScore ,

            meAntiTrypsinTest:req.body.meAntiTrypsinTest ,

            meMoisture:req.body.meMoisture,

            meProtein:req.body.meProtein,

            meFat:req.body.meFat,

            meFibre:req.body.meFibre, 

            meAsh:req.body.meAsh,

            meNutritionistComment:req.body.meNutritionistComment,

            meSecondComment:req.body.meSecondComment,

            date: newDate,

            createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newME);
       
       const savedME = await newME.save();
         console.log(savedME);
             res.json({
                
                 Message: 'Successfully added a new Soya ME Record !',
                 data: savedME
             });
         } catch (err) {
              res.json({ message: err })
         }
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------No. 3 MEAL ---------------------------------------------------------------//

router.get('/feedData/SC', async (req,res)=>{
   
    try {
        const allSCs = await SCs.find();
        res.json({
            

            status: 'Successfully retreived all Sunflower Cake SC Records!',
            data: allSCs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });



router.post('/feedData/addNewSC', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
    
     try {  
        const newSC = new SCs({
        
            

            scDateOfSampleCollected:req.body.scDateOfSampleCollected,
                
            scTimeOfReceipt:req.body.scTimeOfReceipt,

            scSubmissionNumber:req.body.scSubmissionNumber,

            scSupplierName:req.body.scSupplierName, 

            scNRC:req.body.scNRC,
    
            scVehicleRegNumber:req.body.scVehicleRegNumber,

            scTelNumber:req.body.scTelNumber, 

            scEmail:req.body.scEmail, 

            scSampleID:req.body.scSampleID,

            scTypeOfSample:req.body.scTypeOfSample,

            scSiteLocation:req.body.scSiteLocation, 

            scNumberOfBagsPerTonnage:req.body.scNumberOfBagsPerTonnage,

            scNumberOfBagsSampled:req.body.scNumberOfBagsSampled,

            scColor:req.body.scColor,

            scSmell:req.body.scSmell,

            scTexture:req.body.scTexture,

            scForeignBodies:req.body.scForeignBodies,

            scWeevilsOrInsects:req.body.scWeevilsOrInsects, 

            scBranContent:req.body.scBranContent,

            scGritContent:req.body.scGritContent,

            scPowderContent:req.body.scPowderContent,

            scOther:req.body.scOther,

            scMoisture:req.body.scMoisture,

            scTechnician:req.body.scTechnician,

            scQualitativeScore:req.body.scQualitativeScore,

            scFinalVerdict:req.body.scFinalVerdict,

            scReasonForVerdict:req.body.scReasonForVerdict,

            scOtherReason:req.body.scOtherReason, 

            scNumberOfBagsOrTonnageSelected:req.body.scNumberOfBagsOrTonnageSelected,

            scNumberOfBagsOrTonnageRejected:req.body.scNumberOfBagsOrTonnageRejected,

            date: newDate,

            createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newSC);
       
       const savedSC = await newSC.save();
         console.log(savedSC);
             res.json({
                
                 Message: 'Successfully added a new lab Record !',
                 data: savedSC
             });
         } catch (err) {
              res.json({ message: err })
         }
});

//-----------------------------------------------------------------------------------------------------------------------------//


 module.exports= router