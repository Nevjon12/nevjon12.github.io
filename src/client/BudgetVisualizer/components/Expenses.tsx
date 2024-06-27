export default function Expenses(props){

  const adjustments = props.adjustments;
  const setAdjustments = props.setAdjustments;
  const expenseList = props.expenseList;
  const setExL = props.setExL;

  console.log(expenseList)



  return(

    <div  style={{gridArea:"expense"}} className="budgetComponent">

    <>Expenses</> <br /><br />
    {expenseList.map((exp)=>{
      return <div>Day:{exp.day} Amnt:{exp.amount} Exp:{exp.expense}<br /> <br /></div>
    })}
    </div>
  );


}