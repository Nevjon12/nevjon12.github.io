export default function Income(props){

  const adjustments = props.adjustments;
  const setAdjustments = props.setAdjustments;
  const incomeList = props.incomeList;
  const setIncL = props.setIncL;


  return(

    <div  style={{gridArea:"income"}} className="budgetComponent">Income <br /><br /> {incomeList.map((inc)=>{
      return <div>{` Day:${inc.day} Amnt:${inc.amount} Source:${inc.expense} `} <br /><br /></div>
    })} </div>
  );


}