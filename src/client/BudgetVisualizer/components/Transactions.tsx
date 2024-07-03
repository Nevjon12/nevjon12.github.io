import { useState} from "react";
import Expenses from "./transactionComponents/Expenses";
import Income from "./transactionComponents/Income";
import NewTransactionModal from "./transactionComponents/transactionModals/NewTransactionModal";


export default function Transactions(props){

  const {vDataState, setVDataState} = props;
  const transactions = vDataState.transactions; 
  

  const [modalOpen, changeModal] = useState(false);


  return(

    <>
    <NewTransactionModal changeModal={changeModal} modalOpen={modalOpen} transactions={transactions} vDataState={vDataState} setVDataState={setVDataState}/>
    <button style={{gridArea:"button"}}   onClick={()=>{changeModal(!modalOpen)}} >Add Transaction</button>
    <div style={{gridArea:"transactions", display:"flex"}}>
  
      <Income   incomeList={transactions.income} />
      
      
      <Expenses expenseList={transactions.expenses} /> 
      
    </div>
    </>
  )


}