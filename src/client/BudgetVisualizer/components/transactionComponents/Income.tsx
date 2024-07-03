

export default function Income(props){
  

  const incomeList = props.incomeList;




  return(

    <div style={{flex:1}} className="budgetComponent">Total income:  <br /><br /> {incomeList.map((inc)=>{
      return <div>{`Day:${inc.date}
                    Amnt:${inc.amount}
                    Source:${inc.reason}
                    Frequency:${inc.frequency}
              
                   `} <br /><br /></div>
    })} </div>
  );


}