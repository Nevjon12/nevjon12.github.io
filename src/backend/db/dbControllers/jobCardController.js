//DB Model Imports
const JobCard = require('../dbModels/jobCard')

const jobCardController = {};


//Fetch all data for jobs for front-end to render
jobCardController.getAllJobs = async ( req, res, next) => {
  res.locals.cards = await JobCard.find();
  next();
};

//Add a new job to the database

jobCardController.add = async ( req, res, next) => {
  
  const job = new JobCard({
    position: `${req.body.position}`,
    companyName: `${req.body.companyName}`
  });
  
  await job.save();

  next();
};

//Edit an exisiting jobs values or status

jobCardController.edit = ( req, res, next) => {
  console.log('Card Edit');
  next();
};

jobCardController.editPopUp = (req, res, next) => {
  

};

//Delete an existing job from the database

jobCardController.delete = async( req, res, next) => {
  const id = req.params.id;

  await JobCard.findOneAndDelete({_id: id})

  next();
};

//add a note to the specific jobCard

jobCardController.addNote = ( req, res, next) => {
  console.log('Note Add')
  next();
};


module.exports = {

    jobCardController
}