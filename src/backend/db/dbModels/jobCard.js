const mongoose = require('mongoose');

const jobCardSchema = new mongoose.Schema({

  position : {
    type: String,
  },
  companyName: {
    type: String,
  },
  notes: {
    type: String,
  }
})


const JobCard = mongoose.model('JobCard', jobCardSchema );


module.exports = JobCard

