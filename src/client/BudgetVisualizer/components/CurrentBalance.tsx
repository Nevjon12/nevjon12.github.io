import { CurrentBalanceProps } from "../interfaces";

export default function CurrentBalance(props : CurrentBalanceProps){

    const {currentBalance, setCB} = props;

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