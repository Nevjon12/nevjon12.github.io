import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';




export default function GoalModal(props) {
  



  const vDataState = props.vDataState;
  const setNewGoal = props.setNewGoal;
  const modalOpen = props.modalOpen;
  const changeModal = props.changeModal

  //Balance we will update our current one to when saved
  let newGoal;
  


  const onSave = ()=>{ 
      setNewGoal({
        ...vDataState, goalBalance : newGoal}); 
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
      <DialogTitle>Set New Goal</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="goal"
          label="NewGoal"
          type="number"
          variant="standard"
          onChange={(e)=>{ newGoal = +e.target.value }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
