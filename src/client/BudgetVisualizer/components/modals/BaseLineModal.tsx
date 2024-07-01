import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';




export default function BaseLineModal(props) {
  



  const vDataState = props.vDataState;
  const setBaseLine = props.updateBaseLine;
  const modalOpen = props.modalOpen;
  const changeModal = props.changeModal

  //Balance we will update our current one to when saved
  let newBase;
  


  const onSave = ()=>{ 
      setBaseLine({
        ...vDataState, baseLine : newBase}); 
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
          
        >
      <DialogTitle>Set New Base Line</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="baseLine"
          label="New BaseLine"
          type="number"
          variant="standard"
          onChange={(e)=>{ newBase = +e.target.value }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
