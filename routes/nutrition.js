const express = require('express');
const router = express.Router();
const Nutrition = require('../models/Nutrition');

const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Nutrition Route is grafting!');

});

//GET ALL PFIs
router.get('/allNutritionRecords', async (req,res)=>{
   
    try {
        const allNutritionConsults = await Nutrition.find();
        res.json({
            

            status: 'Successfully retreived Nutrition Consultations!',
            data: allNutritionConsults
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewNutritionRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newNutritionConsult = new Nutrition({
        
        nutritionClientName:req.body.nutritionClientName,
        nutritionClientPhoneNumber:req.body.nutritionClientPhoneNumber,
        nutritionClientLocation:req.body.nutritionClientLocation,
        nutritionClientTown:req.body.nutritionClientTown,
        nutritionClientComments:req.body.nutritionClientComments,
        nutritionCategory:req.body.nutritionCategory,
        nutritionOtherCategory:req.body.nutritionOtherCategory,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newNutritionConsult);
       
       const savedNutritionConsult = await newNutritionConsult.save();
         console.log(savedNutritionConsult);
             res.json({
                
                 Message: 'Successfully added a new Nutrition Record !',
                 data: savedNutritionConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});





 module.exports= router