/* eslint-disable @typescript-eslint/no-var-requires */
//Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
require('dotenv').config();

//App Setup
const app = express();
const port = 8000;



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//Routes

const appRouter = require('../backend/db/appRouter')

//handle request body

app.use(express.json());

//DB Connection

mongoose
  .connect(process.env.MONGO_URL)
  .catch((err) => console.log(err))
  .then(console.log('Database Succesfully Accesed'))


//Base requests

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../../index.html')); //Update to use build html file later**
})

//Router

app.use('/api', appRouter);



//Error Handler
app.use((req,res)=>{
  res.status(404).send('Error: Page Not Found');
});

//Global Error Handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => { 
  console.log(`Server is running and gucci on port ${port}`);
});



