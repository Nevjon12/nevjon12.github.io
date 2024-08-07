
import { useEffect, useState } from "react";


export default function TimeRangeSelector(props){

  const vDataState = props.vDataState;
  const updateVSettings = props.updateVSettings;
  
  
  const [startingDate, setStartingDate] = useState<FormDataEntryValue>('')
  const [endDate, setEndDate] = useState<FormDataEntryValue>('')


  function onSubmit(event){
    event.preventDefault();


    const formData = new FormData(event.target);
        
    setStartingDate(formData.get('startDate'));
    setEndDate(formData.get('endDate'));

    const timeRange = [];
    timeRange.push(startingDate, endDate)
    console.log(timeRange)
    updateVSettings({
      ...vDataState,
      viewPeriod : timeRange
    })

  }
 




  return (
    <>
    <form onSubmit={onSubmit} >

      <input type="date" name="startDate" required />
      <input  type="date"  name="endDate" required />

      <button type="submit" >Set Time Range</button>


    </form>
    </>

    
  );
}