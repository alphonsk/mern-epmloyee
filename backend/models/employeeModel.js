const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const infoSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },

    occupation: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },

    age: {
      type: Number,
      required: true
    }

  },
    {
      timestamps: true,
    }
  );


const employeeModel = mongoose.model('Info', infoSchema);
module.exports = employeeModel;
