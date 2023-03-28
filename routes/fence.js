const express = require('express');
const router = express.Router();
const Fence = require('../models/Fence');
const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Fence Route is grafting!');

});




router.get('/allFenceRecords', async (req,res)=>{
   
    try {
        const allFences = await Fence.find();
        res.json({
            

            status: 'Successfully retreived all Fence Consultations!',
            data: allFences
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewFenceRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newFenceConsult = new Fence({
        
        fenceClientName: req.body.fenceClientName,
        fenceClientPhoneNumber: req.body.fenceClientPhoneNumber,
        fenceClientLocation: req.body.fenceClientLocation,
        fenceClientTown:req.body.fenceClientTown,
        fenceClientComments:req.body.fenceClientComments,
       
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newFenceConsult);
       
       const savedFenceConsult = await newFenceConsult.save();
         console.log(savedFenceConsult);
             res.json({
                
                 Message: 'Successfully added a new Pig AI Record !',
                 data: savedFenceConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});




 module.exports= router