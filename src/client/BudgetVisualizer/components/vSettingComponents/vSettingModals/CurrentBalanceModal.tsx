import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';




export default function CurrentBalanceModal(props) {
  



  const vDataState = props.vDataState;
  const setNewBalance = props.setNewBalance;
  const modalOpen = props.modalOpen;
  const changeModal = props.changeModal

  //Balance we will update our current one to when saved
  let newBalance;
  


  const onSave = ()=>{ 
      setNewBalance({
        ...vDataState, currentBalance : newBalance}); 
        changeModal(!modalOpen) 
      };


  const onCancel = ()=>{changeModal(!modalOpen)};

    useEffect(() => {
      if (!modalOpen) {

        localStorage.setItem('VData', JSON.stringify(vDataState))
      }

  }, [modalOpen, vDataState]);




  return (
    <Dialog 
        open={modalOpen}
        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}  
        >
      <DialogTitle>Set New Balance</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="balance"
          label="New Balance"
          type="number"
          variant="standard"
          onChange={(e)=>{ newBalance = +e.target.value }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
