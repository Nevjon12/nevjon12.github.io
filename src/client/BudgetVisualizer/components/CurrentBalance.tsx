import { CurrentBalanceProps } from "../interfaces";
import { useEffect } from "react";

export default function CurrentBalance(props : CurrentBalanceProps){
  const vDataState = props.vDataState;
  const setNewBalance = props.setVDataState





  useEffect(() => {
  
    localStorage.setItem('VData', JSON.stringify(vDataState));
    
  }, [vDataState])
    

  return(

    <div 
      style={{gridArea:"cBalance"}} 
      className="budgetComponent">
      CurrentBalance is : {vDataState.currentBalance}
      <button

        onClick={async()=>{
          const newBalance= vDataState.currentBalance + 1;

          setNewBalance({
          ...vDataState,
          currentBalance: newBalance,

          });
        
        }}> Add to balance
        
      </button>
      </div>
  );


}