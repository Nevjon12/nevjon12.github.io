import {Box, Modal} from '@mui/material';





export default function NewTransactionModal(props) {

  const {modalOpen, changeModal} = props;
  const {vDataState, setVDataState} = props;
  const newTransactions = vDataState.transactions;

  const onSave = (data)=>{ 
        changeModal(!modalOpen)

        if(data.type === 'income'){
          newTransactions.income.push(data);
        }else{
          newTransactions.expenses.push(data);                     
        }
        
        console.log('newTransactions', newTransactions)
        setVDataState({
          ...vDataState,
          transactions : newTransactions
        })
      };


  const onCancel = ()=>{changeModal(!modalOpen)};


  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
   
    onSave(data);

  };





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
        <input type='date'
          name='date'
          required             
        />
        <input placeholder='Amount of Transaction' type='number' name='amount' required ></input>
          <br />
        <input  placeholder='Reason for Transaction' type='text' name='reason' required ></input>
          <br />
        <select  name='type' required >
          <option value="" disabled selected>Is this an Expense or new Income?</option>
          <option value={'expense'}>Expense</option>
          <option value={'income'} >Income</option>
        </select>
           <br />
        <select name='frequency' required >
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
