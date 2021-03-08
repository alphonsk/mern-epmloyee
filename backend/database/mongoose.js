//
const mongoose = require('mongoose'); 


mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('mongoose db conection was successfull');
    }
});


//
module.exports = mongoose;