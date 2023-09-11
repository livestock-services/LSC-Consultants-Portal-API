const express = require('express');
const router = express.Router();
const Fish = require('../models/Fish');
const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Fish Route is grafting!');

});




router.get('/allFishRecords', async (req,res)=>{
   
    try {
        const allFish = await Fish.find();
        res.json({
            

            status: 'Successfully retreived all Fish Consultations!',
            data: allFish
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewFishRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newFishConsult = new Fish({
        
        fishClientName: req.body.fishClientName,
        fishClientPhoneNumber: req.body.fishClientPhoneNumber,
        fishClientLocation: req.body.fishClientLocation,
        fishClientTown:req.body.fishClientTown,
        fishClientComments:req.body.fishClientComments,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newFishConsult);
       
       const savedFishConsult = await newFishConsult.save();
         console.log(savedFishConsult);
             res.json({
                
                 Message: 'Successfully added a new Fish Record !',
                 data: savedFishConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});




 module.exports= router