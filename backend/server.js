require('dotenv').config();
//
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors')
const port = process.env.PORT || 3001
const app = express();

// routes 
const infoRoute = require('./routes/infoRoute')

// db
const mongoose = require('./database/mongoose');

// middleware
app.use(cors());
app.use(express.json());

app.use('/', infoRoute);


// online db mongodb
// const URI = process.env.MONGO_URL
// mongoose.connect(URL, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// }, (err)=>{
//     if(err) throw err;
//     else{
//         console.log('mongoose db conection was successfull'); 
//     }
// }




 
 

// let UserModel = require('../models/user.model');

// //  backend
 
// mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('mongoose db conection was successfull');
//     }
// });



app.listen(port, () => console.log(`Listening on ${port}`))