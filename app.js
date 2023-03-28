
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./routes/auth');

const vetRoute = require('./routes/vet');
const agroRoute = require('./routes/agro');
const nutritionRoute = require('./routes/nutrition');
const aiRoute = require('./routes/ai')
const fenceRoute = require('./routes/fence')
const fishRoute = require('./routes/fish')
const irrigationRoute = require('./routes/irrigation')
const waterPumpRoute = require('./routes/water-pumps')
const labRoute = require('./routes/lab')



//----------middleware-------------------------

app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/auth', authRoute);

app.use('/vet', vetRoute);
app.use('/agro', agroRoute);
app.use('/nutrition', nutritionRoute);
app.use('/ai', aiRoute);
app.use('/fence', fenceRoute);
app.use('/fish', fishRoute);
app.use('/irrigation', irrigationRoute);
app.use('/waterPump', waterPumpRoute);
app.use('/lab', labRoute)

// Default Route
app.get('/', (req,res) =>{
   
    res.send('Server is Working!')
});


//Mongo URI
// const mongoURI = `${process.env.MONGODB_URI}`;

// const mongoURI = 'mongodb://localhost:27017/FileUploads_DB';

//Mongo Connection

const conn = mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true });

// conn.once('open', ()=> console.log('MongoDB is connected!'));
// conn.on('error', (e)=> console.log(e));



const port = process.env.PORT || 83 ;
if (port == null || port == "") {
    port= 5005;
}

app.listen(port, () =>
    console.log(`Server listening on port ${port}`));