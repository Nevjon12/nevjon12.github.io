import {Box, Modal} from '@mui/material';


// import { useEffect } from 'react';




export default function NewTransactionModal(props) {

  const {modalOpen, changeModal} = props
  

  const onSave = ()=>{ 
        changeModal(!modalOpen) 
      };


  const onCancel = ()=>{changeModal(!modalOpen)};



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
      <form>
        
        <input placeholder='Amount of Transaction' type='number' ></input>
          <br />
        <input  placeholder='Reason for Transaction' type='text' ></input>
          <br />
        <select  >
          <option value="" disabled selected>Is this an Expense or new Income?</option>
          <option>Expense</option>
          <option>Income</option>
        </select>
           <br />
        <select>
          <option value="" disabled selected>How frequent is transaction?</option>
          <option>Weekly</option>
          <option>Bi-Weekly</option>
          <option>Monthly</option>
        </select>
          <br />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>

      </form>
      
      </Box>
    </Modal>
  );
}
