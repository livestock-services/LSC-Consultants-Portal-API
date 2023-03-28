const express = require('express');
const router = express.Router();
const WaterPump = require('../models/WaterPump');
const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Water Pump Route is grafting!');

});




router.get('/allWaterPumpRecords', async (req,res)=>{
   
    try {
        const allWaterPumps = await WaterPump.find();
        res.json({
            

            status: 'Successfully retreived all Water Pump Consultations!',
            data: allWaterPumps
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewWaterPumpRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newWaterPumpConsult = new WaterPump({
        
        waterPumpClientName: req.body.waterPumpClientName,
        waterPumpClientPhoneNumber: req.body.waterPumpClientPhoneNumber,
        waterPumpClientLocation: req.body.waterPumpClientLocation,
        waterPumpClientTown:req.body.waterPumpClientTown,
        waterPumpClientComments:req.body.waterPumpClientComments,
       
        date: newDate,
        createdBy:req.body.createdBy
                
        });

           
     
        console.log(newWaterPumpConsult);
       
       const savedWaterPumpConsult = await newWaterPumpConsult.save();
         console.log(savedWaterPumpConsult);
             res.json({
                
                 Message: 'Successfully added a new WaterPump Record !',
                 data: savedWaterPumpConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});




 module.exports= router