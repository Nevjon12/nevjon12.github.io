import { CurrentBalanceProps } from "../interfaces";
import { useState} from "react";
import CurrentBalanceModal from "./vSettingComponents/vSettingModals/CurrentBalanceModal";

export default function CurrentBalance(props : CurrentBalanceProps){
  const vDataState = props.vDataState;
  const setNewBalance = props.setVDataState
  const currentBalance = props.vDataState.currentBalance

  const [modalOpen, changeModal] = useState(false)

  
  const displayAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currentBalance);
    




  return(

    <div 
      style={{gridArea:"cBalance"}} 
      className="budgetComponent">

      <CurrentBalanceModal vDataState={vDataState} setNewBalance={setNewBalance} modalOpen={modalOpen} changeModal={changeModal}  ></CurrentBalanceModal>      
    
      <span>{displayAmount}</span>
      
      <button

          onClick={()=>{changeModal(!modalOpen)}}> Update Current Balance
          
      </button>
      
    </div>

  );


}