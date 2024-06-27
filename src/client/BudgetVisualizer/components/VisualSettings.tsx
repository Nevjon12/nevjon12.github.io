import { VisualSettingsProps } from "../interfaces"

export default function VisualSettings(props : VisualSettingsProps){

  const {
  currentView,
  setV,
  viewPeriod,
  setVPer,
  baseLine,
  setBLine,
  goalBalance,
  setGoal} = props


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