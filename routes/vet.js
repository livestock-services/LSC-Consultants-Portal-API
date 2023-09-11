const express = require('express');
const router = express.Router();
const Vet = require('../models/Vet');
const VetPostMortem = require('../models/VetPostMortem');

const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Vet Route is grafting!');

});

//GET ALL PFIs
router.get('/allVetRecords', async (req,res)=>{
   
    try {
        const allVetConsults = await Vet.find();
        let allNewVetConsults;

        // for(let i=0; i < allVetConsults.data.length; i++){
        //    allNewVetConsults += allVetConsults[i].date.toLocaleDateString('en-GB')
        // }
        res.json({
            

            status: 'Successfully retreived Vetnomy Consultations!',
            data: allVetConsults
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewVetRecord', async (req,res) => {
    
    req.body.date = new Date()

    let newDate =  (req.body.date).toLocaleDateString('en-US');

    console.log(newDate)
     try {  
        const newVetConsult = new Vet({
        
        vetClientName:req.body.vetClientName,
        vetClientPhoneNumber:req.body.vetClientPhoneNumber,
        vetClientLocation:req.body.vetClientLocation,
        vetClientTown:req.body.vetClientTown,
        vetComments:req.body.vetComments,
        vetCategory:req.body.vetCategory,
        vetOther:req.body.vetOther,
        vetComments:req.body.vetComments,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newVetConsult);
       
       const savedVetConsult = await newVetConsult.save();
         console.log(savedVetConsult);
             res.json({
                
                 Message: 'Successfully added a new Vet Record !',
                 data: savedVetConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});


//--------------------------------POST MORTEMS-------------------------------------------------//


//GET ALL Post Mortems
router.get('/allPostMortems', async (req,res)=>{
   
    try {
        const allPostMortems = await VetPostMortem.find();
        res.json({
            

            status: 'Successfully retreived Vet Post Mortems!',
            data: allPostMortems
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 //----Village Chickens
 router.get('/allVillageChickenPostMortems', async (req,res)=>{
   
    try {

       
        const allPostMortems = await VetPostMortem.find();

         filteredVCPMs = allPostMortems.filter( a=>
            a.vetPostMortemCategory ==='Village Chicken'
           )

        res.json({
            

            status: 'Successfully retreived Vet Post Mortems!',
            data: filteredVCPMs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewPostMortem', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newPostMortem = new VetPostMortem({
        
        vetPostMortemClientName:req.body.vetPostMortemClientName,
        vetPostMortemClientPhoneNumber:req.body.vetPostMortemClientPhoneNumber,
        vetPostMortemClientLocation:req.body.vetPostMortemClientLocation,
        vetPostMortemClientTown:req.body.vetPostMortemClientTown,
        vetPMComments:req.body.vetPMComments,
        vetPostMortemCategory:req.body.vetPostMortemCategory,
        vetPostMortemOtherCategory:req.body.vetPostMortemOtherCategory,
        vetPostMortemDiseases:req.body.vetPostMortemDiseases,
        vetPostMortemOtherDiseases:req.body.vetPostMortemOtherDiseases,
        vetPMComments:req.body.vetPMComments,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newPostMortem);
       
       const savedPostMortem = await newPostMortem.save();
         console.log(savedPostMortem);
             res.json({
                
                 Message: 'Successfully added a new Post Mortem Record !',
                 data: savedPostMortem
             });
         } catch (err) {
              res.json({ message: err })
         }
});




 module.exports= router