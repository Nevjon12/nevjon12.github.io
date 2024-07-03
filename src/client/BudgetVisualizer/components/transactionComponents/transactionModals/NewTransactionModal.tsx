import { MenuItem, Select } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
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
    <Dialog 
        open={modalOpen}
        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}  
        >
      <DialogTitle>Enter New Transaction</DialogTitle>
      <DialogContent>
        
        <Select >
          <MenuItem value={'income'}>Income</MenuItem>
          <MenuItem value={'expense'} >Expense</MenuItem>
        </Select>
        <br />

        <TextField
          autoFocus
          margin="dense"
          id="amount"
          label="Amount"
          type="number"
          variant="standard"
          onChange={()=>{}}
        />
        <br />
        <TextField
          autoFocus
          margin="dense"
          id="source"
          label="Source"
          type="text"
          variant="standard"
          onChange={()=>{}}
        />
        <br />
        <Select>
          <MenuItem value={'weekly'}>Weekly</MenuItem>
          <MenuItem value={'bi-weekly'} >Bi-weekly</MenuItem>
          <MenuItem value={'monthly'} >Monthly</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
