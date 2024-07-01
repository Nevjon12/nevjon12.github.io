import { IncomeProps } from "../interfaces";

export default function Income(props : IncomeProps){
  
  const adjustments = props.adjustments;
  // const updateState = props.setAdjustments;
  const incomeList = props.incomeList;

  const totalIncome = adjustments.calculateTotal(incomeList)

  console.log(totalIncome)
  // console.log(adjustments, setAdjustments, incomeList, setIncL)

  // const addNewExpense = (e)=>{
  //   //Take form data and save it in an object
  //   const newExpense = e.target.value;
  //   //
  // }


  return(

    <div  style={{gridArea:"income"}} className="budgetComponent">Total income: ${totalIncome} <br /><br /> {incomeList.map((inc)=>{
      return <div>{` Day:${inc.day} Amnt:${inc.amount} Source:${inc.expense} `} <br /><br /></div>
    })} </div>
  );


}