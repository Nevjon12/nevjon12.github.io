
import { ExpensesProps } from "../interfaces";

export default function Expenses(props : ExpensesProps){

  const adjustments = props.adjustments;
  // const updateState = props.setAdjustments;
  const expenseList = props.expenseList;

  const totalExpenses = adjustments.calculateTotal(expenseList)


  return(

    <div  style={{gridArea:"expense"}} className="budgetComponent">

    <>Total expenses: ${totalExpenses}</> <br /><br />
    {expenseList.map((exp)=>{
      return <div>Day:{exp.day} Amnt:{exp.amount} Exp:{exp.expense}<br /> <br /></div>
    })}
    </div>
  );


}