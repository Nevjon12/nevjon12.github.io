


export default function GoalSelector(props){

  const vDataState = props.vDataState;
  const goalBalance = props.goalBalance;
  const updateVSettings = props.updateVSettings;


  return(

  <>
    <button style={{flex:1}}
      onClick={()=>{
          let currentGoal = goalBalance;
          currentGoal += 100;
          updateVSettings({
            ...vDataState,
            goalBalance: currentGoal});

        }}

    >Set New Goal</button> <br />
  </>

  )



}