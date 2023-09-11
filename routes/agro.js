const express = require('express');
const router = express.Router();
const Agro = require('../models/Agro');
const TAR = require('../models/Filters/TotalAgroRecordsByDate');
const verify = require('./verifyToken');




router.get('/', async (req,res)=>{
  
    res.send('Agro Route is grafting!');

});

//GET ALL PFIs
router.get('/allAgroRecords', async (req,res)=>{
   
    try {
        const allAgroConsults = await Agro.find();
        res.json({
            

            status: 'Successfully retreived Agronomy Consultations!',
            data: allAgroConsults
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //CREATE NEW PFIs
router.post('/addNewAgroRecord', async (req,res) => {
    
    req.body.date = new Date()

    const newDate =  (req.body.date).toLocaleDateString('en-US');
     try {  
        const newAgroConsult = new Agro({
        
        clientName: req.body.clientName,
        clientPhoneNumber: req.body.clientPhoneNumber,
        clientLocation: req.body.clientLocation,
        clientTown:req.body.clientTown,
        clientComments:req.body.clientComments,
        agroCategory:req.body.agroCategory,
        agroOther:req.body.agroOther,
        date: newDate,
        createdBy:req.body.createdBy
       
                
        });

           
     
        console.log(newAgroConsult);
       
       const savedAgroConsult = await newAgroConsult.save();
         console.log(savedAgroConsult);
             res.json({
                
                 Message: 'Successfully added a new Agro Record !',
                 data: savedAgroConsult
             });
         } catch (err) {
              res.json({ message: err })
         }
});

router.post('/filterAgroRecordsByDate', async (req,res) => {
    
  
     try {  

                const newFBD = new TAR({
                    startDate:req.body.startDate,
                    endDate:req.body.endDate
                })

                var startDate= newFBD.startDate;
                var endDate= newFBD.endDate;

            //   var firstDay = startDate.toLocaleDateString();
            //   var  lastDay = endDate.toLocaleDateString();

                console.log(startDate);
                console.log(endDate);

                // console.log(firstDay);
                // console.log(lastDay);
                
                console.log(newFBD);


                const allAgroRecords = await Agro.find();

                const filteredTAR = allAgroRecords.filter( t => 
                    t.date >= newFBD.startDate && t.date <= newFBD.endDate
                );

                console.log(filteredTAR);

                for (let i = 0; i < filteredTAR.length; i++) {
                    
                    sum += filteredTAR[i];
                }
                
                console.log(sum);

                // const savedFilteredTAR = await newFBD.save();
                // console.log(savedFilteredTAR)

                res.json({

                    status: 'Successfully calculated Consults!',
                    data: sum + " " + "Agro Consultations between"+ " "+ startDate + " " + "and" + " " + endDate
                    
                });
                
       
         } catch (err) {
              res.json({ message: err })
         }
});

 module.exports= router