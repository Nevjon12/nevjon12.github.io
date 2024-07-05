import { VisualSettingsProps } from "../interfaces"
import { useEffect } from "react";

import GraphTypeSelector from "./vSettingComponents/GraphTypeSelector";
import TimeRangeSelector from "./vSettingComponents/TimeRangeSelector";
import BaseLineSelector from "./vSettingComponents/BaseLineSelector";
import GoalSelector from "./vSettingComponents/GoalSelector";

export default function VisualSettings(props : VisualSettingsProps){
  const vDataState = props.vDataState;
  const currentView = props.vDataState.currentView;
  const viewPeriod = props.vDataState.viewPeriod;
  const baseLine = props.vDataState.baseLine;
  const goalBalance = props.vDataState.goalBalance;
  const updateVSettings = props.setVDataState

  

  useEffect(() => {
  
    localStorage.getItem('VData');
    
  }, [vDataState])
  
  return(

    <div style={{gridArea:"vSettings"}} className="budgetComponent" id="BudgetVSettings" >

      <GraphTypeSelector currentView={currentView} updateVSettings={updateVSettings} vDataState={vDataState}> Toggle Graph Type </GraphTypeSelector>
      <TimeRangeSelector viewPeriod={viewPeriod} updateVSettings={updateVSettings} vDataState={vDataState} />
      <BaseLineSelector baseLine={baseLine} updateVSettings={updateVSettings} vDataState={vDataState} />
      <GoalSelector goalBalance={goalBalance} updateVSettings={updateVSettings} vDataState={vDataState} />

    </div>
  );


}