export default function VisualSettings(props){

  const currentView=props.currentView
  const setV=props.setV
  const viewPeriod=props.viewPeriod
  const setVPer=props.setVPer
  const baseLine=props.baseLine
  const setBLine=props.setBLine
  const goalBalance=props.goalBalance
  const setGoal=props.setGoal

  
  return(

    <div style={{gridArea:"vSettings"}} className="budgetComponent">
      VisualSettings <br />


      Current View is: {currentView} <button
        onClick={()=>{
          if(currentView === "Line Graph"){
            setV("Bar Graph");
            return
          }
          setV("Line Graph")
        }}

      >Change the View
      </button> <br />


      Current View Period is : {viewPeriod} <button
        onClick={()=>{
          let today = viewPeriod;
          today++
          setVPer(today);

        }}
    
      >Update View Period</button> <br />


      You Current Baseline is: {baseLine} <button
        onClick={()=>{
          let currentBaseLine = baseLine;
          currentBaseLine += 50;
          setBLine(currentBaseLine);

        }}

      >Set New Base Line</button> <br />


      Your Current Goal is: {goalBalance} <button
      onClick={()=>{
          let currentGoal = goalBalance;
          currentGoal += 100;
          setGoal(currentGoal);

        }}

      >Set New Goal</button> <br />

    </div>
  );


}