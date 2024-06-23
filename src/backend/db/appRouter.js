const express = require('express');
const router = express.Router();

//Controllers

const { jobCardController } = require('./dbControllers/jobCardController');

//jobCard Routes

router.get('/', jobCardController.getAllJobs, (req, res)=>{

  res.status(200).json({data : res.locals.cards});
})

router.post('/', jobCardController.add, jobCardController.getAllJobs, (req, res)=>{

  res.status(200).json({data: res.locals.cards})
})

router.delete('/:id', jobCardController.delete, (req,res)=>{
  console.log('delete route worked')
  res.status(200)
})

router.patch('/:id', jobCardController.edit, (req,res)=>{

  res.status(200)

})


//note Routes




//


module.exports = router;