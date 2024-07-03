import {Box, Modal} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

// import { useEffect } from 'react';




export default function NewTransactionModal(props) {

  const {modalOpen, changeModal} = props
  const {transactions, setTransactions} = props

  const onSave = (data)=>{ 
        changeModal(!modalOpen)
        const currentExpenses = transactions.expenses;
        const currentIncome = transactions.income;
        if(data.type === 'income'){
          currentIncome.push(data)
          setTransactions(
            {...transactions,
              income : currentIncome
            })
        }else{
          currentExpenses.push(data)
          setTransactions(
            {...transactions,
              expenses : currentExpenses
            })
        }

        console.log('expense',currentExpenses, 'income',currentIncome)

      };


  const onCancel = ()=>{changeModal(!modalOpen)};


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target); // event.target is the form
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value; // Populate data object with form values
    });
    console.log(data); // Here you can see the collected form data
   
    onSave(data);

  };

  // const onSubmit = (formData)=>{
  //   //initialize a copy of the current transactions to update
  //   const updatedTransactions = transactions;
  //   //initialize an object to save our info
  //   const newTransaction = {
  //     date: Number,
  //     amount: Number,
  //     reason: String,
  //     type: String,
  //     frequency: String
  //   };
  //   //input the form data into the object
  //   newTransaction.date = formData.date;
  //   newTransaction.amount = formData.amount;
  //   newTransaction.reason = formData.reason
  //   newTransaction.type = formData.type;
  //   newTransaction.frequency = formData.source;

  //   //push the new Transaction into the correct  transaction Type


  // }

  //   useEffect(() => {
  //     if (!modalOpen) {

  //       localStorage.setItem('VData', JSON.stringify(vDataState))
  //     }

  // }, [modalOpen]);




  return (
    <Modal 
      hideBackdrop={true}
      open={modalOpen}
      
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
      <h2>Add a new transaction</h2>
      <form onSubmit={handleSubmit} >
        <br />
        <DatePicker
          name='date'
          label="Transaction Date"                
        />
        <input placeholder='Amount of Transaction' type='number' name='amount'></input>
          <br />
        <input  placeholder='Reason for Transaction' type='text' name='reason' ></input>
          <br />
        <select  name='type'>
          <option value="" disabled selected>Is this an Expense or new Income?</option>
          <option value={'expense'}>Expense</option>
          <option value={'income'} >Income</option>
        </select>
           <br />
        <select name='frequency'>
          <option value="" disabled selected>How frequent is transaction?</option>
          <option value={'weekly'} >Weekly</option>
          <option value={'bi-weekly'} >Bi-Weekly</option>
          <option value={'monthly'} >Monthly</option>
        </select>
          <br />
        <button type='submit'>Save</button>
        <button onClick={onCancel}>Cancel</button>

      </form>
      
      </Box>
    </Modal>
  );
}
