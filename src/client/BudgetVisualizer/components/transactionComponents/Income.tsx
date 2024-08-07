

export default function Income(props){
  

  const incomeList = props.incomeList;




  return(

    <div style={{flex:1}} className="budgetComponent">Total income:  <br /><br /> {incomeList.map((inc)=>{
      const day = new Date(inc.date).toLocaleDateString()


      return <div>{`Day:${day}
                    Amnt:${inc.amount}
                    Source:${inc.reason}
                    Frequency:${inc.frequency}
              
                   `} <br /><br /></div>
    })} </div>
  );


}