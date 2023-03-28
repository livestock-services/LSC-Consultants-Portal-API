const express = require('express');
const router = express.Router();
const Irrigation = require('../models/Irrigation');
const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Irrigation Route is grafting!');

});




router.get('/allIrrigationRecords', async (req,res)=>{
   
    try {
        const allIrrigations = await Irrigation.find();
        res.json({
            

            status: 'Successfully retreived all Irrigation Consultations!',
            data: allIrrigations
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewIrrigationRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newIrrigationConsult = new Irrigation({
        
        irrigationClientName: req.body.irrigationClientName,
        irrigationClientPhoneNumber: req.body.irrigationClientPhoneNumber,
        irrigationClientLocation: req.body.irrigationClientLocation,
        irrigationClientTown:req.body.irrigationClientTown,
        irrigationClientComments:req.body.irrigationClientComments,
       
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newIrrigationConsult);
       
       const savedIrrigationConsult = await newIrrigationConsult.save();
         console.log(savedIrrigationConsult);
             res.json({
                
                 Message: 'Successfully added a new Irrigation Record !',
                 data: savedIrrigationConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});




 module.exports= router