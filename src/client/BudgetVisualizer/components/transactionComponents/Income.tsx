import { IncomeProps } from "../interfaces";

export default function Income(props : IncomeProps){
  

  const incomeList = props.incomeList;



  // console.log(adjustments, setAdjustments, incomeList, setIncL)

  // const addNewExpense = (e)=>{
  //   //Take form data and save it in an object
  //   const newExpense = e.target.value;
  //   //
  // }


  return(

    <div style={{flex:1}} className="budgetComponent">Total income:  <br /><br /> {incomeList.map((inc)=>{
      return <div>{` Day:${inc.day} Amnt:${inc.amount} Source:${inc.expense} `} <br /><br /></div>
    })} </div>
  );


}