import { ExpensesProps } from "../interfaces";

export default function Expenses(props : ExpensesProps){

  const {adjustments, setAdjustments, expenseList, setExL} = props



  return(

    <div  style={{gridArea:"expense"}} className="budgetComponent">

    <>Expenses</> <br /><br />
    {expenseList.map((exp)=>{
      return <div>Day:{exp.day} Amnt:{exp.amount} Exp:{exp.expense}<br /> <br /></div>
    })}
    </div>
  );


}