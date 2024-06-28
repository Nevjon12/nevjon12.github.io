import { VisualSettingsProps } from "../interfaces"
import { useEffect } from "react";

export default function VisualSettings(props : VisualSettingsProps){
  const vDataState = props.vDataState;
  const currentView = props.vDataState.currentView;
  const viewPeriod = props.vDataState.viewPeriod;
  const baseLine = props.vDataState.baseLine;
  const goalBalance = props.vDataState.goalBalance;
  const updateVSettings = props.setVDataState



  useEffect(() => {
  
    localStorage.setItem('VData', JSON.stringify(vDataState));
    
  }, [vDataState])

  return(

    <div style={{gridArea:"vSettings"}} className="budgetComponent">
      Settings <br />

      {currentView}
      <button
        onClick={()=>{
          if(currentView === "Line Graph"){
            updateVSettings({
              ...vDataState,
              currentView: "Bar Graph"});
              return;
          }
            updateVSettings({
              ...vDataState,
              currentView: "Line Graph"});
        }}

      >Toggle Graph Type
      </button> <br />


      <button
        onClick={()=>{
          let today = viewPeriod;
          today++;
          updateVSettings({
            ...vDataState,
            viewPeriod: today});;

        }}
    
      >Update View Period</button> <br />


      <button
        onClick={()=>{
          let currentBaseLine = baseLine;
          currentBaseLine += 50;
          updateVSettings({
            ...vDataState,
            baseLine: currentBaseLine});

        }}

      >Set New Base Line</button> <br />


      <button
      onClick={()=>{
          let currentGoal = goalBalance;
          currentGoal += 100;
          updateVSettings({
            ...vDataState,
            goalBalance: currentGoal});

        }}

      >Set New Goal</button> <br />

    </div>
  );


}