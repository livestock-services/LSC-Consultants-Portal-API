const express = require('express');
const router = express.Router();
const { BAIs, PAIs } = require('../models/AI');
const verify = require('./verifyToken');




router.get('/beef', async (req,res)=>{
  
    res.send('Beef AI Route is grafting!');

});

//GET ALL PFIs
router.get('/beef/allBeefAIRecords', async (req,res)=>{
   
    try {
        const allBeefAIs = await BAIs.find();
        res.json({
            

            status: 'Successfully retreived all Beef AI Consultations!',
            data: allBeefAIs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/beef/addNewBeefAIRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newBeefAIConsult = new BAIs({
        
        beefAIClientName: req.body.beefAIClientName,
        beefAIClientPhoneNumber: req.body.beefAIClientPhoneNumber,
        beefAIClientLocation: req.body.beefAIClientLocation,
        beefAIClientTown:req.body.beefAIClientTown,
        beefAIClientComments:req.body.beefAIClientComments,
        beefAICategory:req.body.beefAICategory,
        beefAIOtherCategory:req.body.beefAIOtherCategory,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newBeefAIConsult);
       
       const savedBeefAIConsult = await newBeefAIConsult.save();
         console.log(savedBeefAIConsult);
             res.json({
                
                 Message: 'Successfully added a new Beef AI Record !',
                 data: savedBeefAIConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});



router.get('/pigs/allPigAIRecords', async (req,res)=>{
   
    try {
        const allPigAIs = await PAIs.find();
        res.json({
            

            status: 'Successfully retreived all Pig AI Consultations!',
            data: allPigAIs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/pigs/addNewPigAIRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newPigAIConsult = new PAIs({
        
        pigAIClientName: req.body.pigAIClientName,
        pigAIClientPhoneNumber: req.body.pigAIClientPhoneNumber,
        pigAIClientLocation: req.body.pigAIClientLocation,
        pigAIClientTown:req.body.pigAIClientTown,
        pigAIClientComments:req.body.pigAIClientComments,
       
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newPigAIConsult);
       
       const savedPigAIConsult = await newPigAIConsult.save();
         console.log(savedPigAIConsult);
             res.json({
                
                 Message: 'Successfully added a new Pig AI Record !',
                 data: savedPigAIConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});




 module.exports= router