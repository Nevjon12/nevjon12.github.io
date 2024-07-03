import GoalModal from "./vSettingModals/GoalModal";
import { useState } from "react";



export default function GoalSelector(props){

  const vDataState = props.vDataState;
  const goalBalance = props.goalBalance;
  const setNewGoal = props.updateVSettings;
  const [modalOpen, changeModal] = useState(false)

  const displayAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(goalBalance);

  return(

  <>
    <GoalModal vDataState={vDataState} setNewGoal={setNewGoal} modalOpen={modalOpen} changeModal={changeModal}/>
    <span>{displayAmount}</span>
    <button style={{flex:1}}
      onClick={()=>{changeModal(!modalOpen)}}

    >Set New Goal</button> <br />
  </>

  )



}