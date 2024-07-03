
// import { ExpensesProps } from "../interfaces";

export default function Expenses(props){


  const expenseList = props.expenseList;




  return(

    <div style={{flex:1}} className="budgetComponent">

    <>Total expenses: </> <br /><br />
    {expenseList.map((exp)=>{
      return <div>{` Day: ${exp.date}
                    Amnt: ${exp.amount}
                    Source: ${exp.reason}
                    Frequency: ${exp.frequency}
              
                   `}<br /> <br /></div>
    })}
    </div>
  );


}