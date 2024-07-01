import { useState } from "react";



export default function ViewTimeRange(props){

  const vDataState = props.vDataState;
  const updateVSettings = props.updateVSettings;
  const viewPeriod = props.vDataState.viewPeriod;
  console.log('viewState', viewPeriod)


  return (
    <>
      <button
      
        
      >Update View Period</button> <br />
    </>
  );
};