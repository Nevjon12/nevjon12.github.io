export default function CurrentBalance(props){

    const currentBalance = props.currentBalance;
    const setCB = props.setCB;



  return(

    <div 
      style={{gridArea:"cBalance"}} 
      className="budgetComponent">
      CurrentBalance is : {currentBalance} <button onClick={()=>{
      const newBalance = currentBalance + 1
      setCB(newBalance)}}>Add to balance</button>   
      
      
    </div>
  );


}