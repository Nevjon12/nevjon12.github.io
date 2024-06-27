import { IncomeProps } from "../interfaces";

export default function Income(props : IncomeProps){
  const {adjustments, setAdjustments, incomeList, setIncL} = props



  const addNewExpense = (e)=>{
    //Take form data and save it in an object
    const newExpense = e.target.value;
    //
  }


  return(

    <div  style={{gridArea:"income"}} className="budgetComponent">Income <br /><br /> {incomeList.map((inc)=>{
      return <div>{` Day:${inc.day} Amnt:${inc.amount} Source:${inc.expense} `} <br /><br /></div>
    })} </div>
  );


}