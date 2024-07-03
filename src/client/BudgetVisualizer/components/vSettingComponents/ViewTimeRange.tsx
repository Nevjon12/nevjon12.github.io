
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

export default function ViewTimeRange(props){

  const vDataState = props.vDataState;
  const updateVSettings = props.updateVSettings;
  
  const [startingDate, setStartingDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())

  let currentDate = startingDate;

  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
    console.log(currentDate.format('MM/DD/YYYY'));
    currentDate = currentDate.add(1, 'day');
  }
 




  return (
    <>
   
    <div style={{flex:2, display:"inline-flex"}}>
    <DatePicker
      label="Start"
      value={startingDate.toDate()}
      onChange={(newValue) => {
                setStartingDate(dayjs(newValue));
                setEndDate(dayjs(newValue))
                const newViewPeriod = [newValue, endDate]
                updateVSettings({
                  ...vDataState,
                  viewPeriod: newViewPeriod
                })
                
                }}
     />
    <DatePicker
      label="End" 
      value={endDate.toDate()} // Convert dayjs object to Date for DatePicker
      onChange={(newValue) => {
                const newEndDate = dayjs(newValue);
                if(newEndDate.isBefore(startingDate, 'day')) {
                alert('End date must be after the start date.')
                
                }else {
                setEndDate(dayjs(newValue))
                const newViewPeriod = [startingDate, newValue]
                updateVSettings({
                  ...vDataState,
                  viewPeriod: newViewPeriod
                })}
                }} 
    />
    </div>
    </>
  );
};