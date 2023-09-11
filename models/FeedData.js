const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone');

//---- AMENDED PERMIT APPLICATION SCHEMA---//
const No3Meal = new mongoose.Schema({

    nmDateOfSampleCollected:{
        type:String,

    },
                
    nmTimeOfReceipt:{
        type:String,

    },

    nmSubmissionNumber:{
        type:String,

    },

    nmSupplierName:{
        type:String,

    }, 

    nmNRC:{
        type:String,

    },

    nmVehicleRegNumber:{
        type:String,

    },

    nmTelNumber:{
        type:String,

    }, 

    nmEmail:{
        type:String,

    }, 

    nmSampleID:{
        type:String,

    },

    nmTypeOfSample:{
        type:String,

    },

    nmSiteLocation:{
        type:String,

    }, 

    nmNumberOfBagsPerTonnage:{
        type:String,

    },

    nmNumberOfBagsSampled:{
        type:String,

    },

    nmColor:{
        type:String,

    },

    nmSmell:{
        type:String,

    },

    nmTexture:{
        type:String,

    },

    nmForeignBodies:{
        type:String,

    },

    nmWeevilsOrInsects:{
        type:String,

    }, 

    nmBranContent:{
        type:String,

    },

    nmGritContent:{
        type:String,

    },

    nmPowderContent:{
        type:String,

    },

    nmOther:{
        type:String,

    },

    nmMoisture:{
        type:String,

    },

    nmTechnician:{
        type:String,

    },

    nmQualitativeScore:{
        type:String,

    },

    nmFinalVerdict:{
        type:String,

    },

    nmReasonForVerdict:{
        type:String,

    },

    nmOtherReason:{
        type:String,

    }, 

    nmNumberOfBagsOrTonnageSelected:{
        type:String,

    },

    nmNumberOfBagsOrTonnageRejected:{
        type:String,

    },

        date:{
            type: String,
            
        },

        createdBy:{
            type: String
          },
       
       
        
        
});


//--- SOYA FF SCHEMA---------//

const SoyaFF = new mongoose.Schema({

            ffDateReceived:{
                type:String
            },

            ffReceivedBy:{
                type:String
            } ,

            ffTimeOfReceipt:{
                type:String
            },

            ffSubmissionNumber:{
                type:String
            } ,

            ffSupplierName:{
                type:String
            }, 

            ffNRC:{
                type:String
            },

            ffTelNumber:{
                type:String
            }, 

            ffDescription:{
                type:String
            },

            ffSiteLocation:{
                type:String
            }, 

            ffSampleID:{
                type:String
            },

            ffSamplePackaging:{
                type:String
            },

            ffSampleLabelling:{
                type:String
            },

            ffSampleCondition:{
                type:String
            },

            ffTestRequested:{
                type:String
            },

            ffColor:{
                type:String
            },

            ffSmell:{
                type:String
            },

            ffTexture:{
                type:String
            },

            ffForeignBodies:{
                type:String
            },

            ffOther:{
                type:String
            },

            ffQualitativeScore:{
                type:String
            } ,

            ffAntiTrypsinTest:{
                type:String
            } ,

            ffMoisture:{
                type:String
            },

            ffProtein:{
                type:String
            },

            ffFat:{
                type:String
            },

            ffFibre:{
                type:String
            }, 

            ffAsh:{
                type:String
            },

            ffNutritionistComment:{
                type:String
            },

            ffSecondComment:{
                type:String
            },

   
        date:{
            type: String,
            
        }, 

        createdBy:{
            type: String
          },
       
  
   
    
    
});


//--- SOYA SE SCHEMA---------//

const SoyaSE = new mongoose.Schema({

    seDateReceived:{
        type: String
    },

    seReceivedBy:{
        type: String
    } ,

    seTimeOfReceipt:{
        type: String
    },

    seSubmissionNumber:{
        type: String
    } ,

    seSupplierName:{
        type: String
    }, 

    seNRC:{
        type: String
    },

    seTelNumber:{
        type: String
    }, 

    seDescription:{
        type: String
    },

    seSiteLocation:{
        type: String
    }, 

    seSampleID:{
        type: String
    },

    seSamplePackaging:{
        type: String
    },

    seSampleLabelling:{
        type: String
    },

    seSampleCondition:{
        type: String
    },

    seTestRequested:{
        type: String
    },

    seColor:{
        type: String
    },

    seSmell:{
        type: String
    },

    seTexture:{
        type: String
    },

    seForeignBodies:{
        type: String
    },

    seOther:{
        type: String
    },

    seQualitativeScore:{
        type: String
    } ,

    seAntiTrypsinTest:{
        type: String
    } ,

    seMoisture:{
        type: String
    },

    seProtein:{
        type: String
    },

    seFat:{
        type: String
    },

    seFibre:{
        type: String
    }, 

    seAsh:{
        type: String
    },

    seNutritionistComment:{
        type: String
    },

    seSecondComment:{
        type: String
    },

   
        date:{
            type: String,
            
        }, 

        createdBy:{
            type: String
          },
       
  
   
    
    
});


//--- SOYA ME SCHEMA---------//

const SoyaME = new mongoose.Schema({

        meDateReceived:{
            type: String
        },

        meReceivedBy:{
            type: String
        } ,

        meTimeOfReceipt:{
            type: String
        },

        meSubmissionNumber:{
            type: String
        } ,

        meSupplierName:{
            type: String
        }, 

        meNRC:{
            type: String
        },

        meTelNumber:{
            type: String
        }, 

        meDescription:{
            type: String
        },

        meSiteLocation:{
            type: String
        }, 

        meSampleID:{
            type: String
        },

        meSamplePackaging:{
            type: String
        },

        meSampleLabelling:{
            type: String
        },

        meSampleCondition:{
            type: String
        },

        meTestRequested:{
            type: String
        },

        meColor:{
            type: String
        },

        meSmell:{
            type: String
        },

        meTexture:{
            type: String
        },

        meForeignBodies:{
            type: String
        },

        meOther:{
            type: String
        },

        meQualitativeScore:{
            type: String
        } ,

        meAntiTrypsinTest:{
            type: String
        } ,

        meMoisture:{
            type: String
        },

        meProtein:{
            type: String
        },

        meFat:{
            type: String
        },

        meFibre:{
            type: String
        }, 

        meAsh:{
            type: String
        },

        meNutritionistComment:{
            type: String
        },

        meSecondComment:{
            type: String
        },


   
        date:{
            type: String,
            
        }, 

        createdBy:{
            type: String
          },
       
  
   
    
    
});


//--- SUNFLOWER CAKE SC SCHEMA---------//

const SunflowerCakeSC = new mongoose.Schema({

                    scDateOfSampleCollected:{
                        type: String
                    },
                
                    scTimeOfReceipt:{
                        type: String
                    },

                    scSubmissionNumber:{
                        type: String
                    },

                    scSupplierName:{
                        type: String
                    }, 

                    scNRC:{
                        type: String
                    },
            
                    scVehicleRegNumber:{
                        type: String
                    },

                    scTelNumber:{
                        type: String
                    }, 

                    scEmail:{
                        type: String
                    }, 

                    scSampleID:{
                        type: String
                    },

                    scTypeOfSample:{
                        type: String
                    },

                    scSiteLocation:{
                        type: String
                    }, 

                    scNumberOfBagsPerTonnage:{
                        type: String
                    },

                    scNumberOfBagsSampled:{
                        type: String
                    },

                    scColor:{
                        type: String
                    },

                    scSmell:{
                        type: String
                    },

                    scTexture:{
                        type: String
                    },

                    scForeignBodies:{
                        type: String
                    },

                    scWeevilsOrInsects:{
                        type: String
                    }, 

                    scBranContent:{
                        type: String
                    },

                    scGritContent:{
                        type: String
                    },

                    scPowderContent:{
                        type: String
                    },

                    scOther:{
                        type: String
                    },

                    scMoisture:{
                        type: String
                    },

                    scTechnician:{
                        type: String
                    },

                    scQualitativeScore:{
                        type: String
                    },

                    scFinalVerdict:{
                        type: String
                    },

                    scReasonForVerdict:{
                        type: String
                    },

                    scOtherReasomn:{
                        type: String
                    }, 

                    scNumberOfBagsOrTonnageSelected:{
                        type: String
                    },

                    scNumberOfBagsOrTonnageRejected:{
                        type: String
                    },

   
                    date:{
                        type: String,
                        
                    }, 

                    createdBy:{
                        type: String
                    },
       
  
   
    
    
});



const No3MealSchema = mongoose.model("No. 3 Meal", No3Meal);

const SoyaFFSchema = mongoose.model("Soya FF", SoyaFF);

const SoyaSESchema = mongoose.model("Soya SE", SoyaSE);

const SoyaMESchema = mongoose.model("Soya ME", SoyaME);

const SunflowerCakeSCSchema = mongoose.model("Sunflower Cake SC", SunflowerCakeSC);

module.exports = { NMs:No3MealSchema, FFs:SoyaFFSchema, SEs:SoyaSESchema, MEs:SoyaMESchema, SCs:SunflowerCakeSCSchema }