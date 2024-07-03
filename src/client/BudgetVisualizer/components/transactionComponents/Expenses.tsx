
import { ExpensesProps } from "../interfaces";

export default function Expenses(props : ExpensesProps){


  const expenseList = props.expenseList;




  return(

    <div style={{flex:1}} className="budgetComponent">

    <>Total expenses: </> <br /><br />
    {expenseList.map((exp)=>{
      return <div>Day:{exp.day} Amnt:{exp.amount} Exp:{exp.expense}<br /> <br /></div>
    })}
    </div>
  );


}