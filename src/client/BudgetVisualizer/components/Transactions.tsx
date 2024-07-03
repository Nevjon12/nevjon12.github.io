import { useState, useEffect } from "react";
import Expenses from "./transactionComponents/Expenses";
import Income from "./transactionComponents/Income";
import NewTransactionModal from "./transactionComponents/transactionModals/NewTransactionModal";


export default function Transactions(props){

  const transactions = props.transactions;
  const setTransactions = props.setTransactions;
  const {vDataState, setVDataState} = props;

  const [modalOpen, changeModal] = useState(false);


  //SET UP USEEFFECT TO UPDATE LOCALSTORAGE AND VDATA
    useEffect(()=>{})

  /*
    What does this do?:
      -it adds a new transaction
    How?:
      - uses a modal with a form containing 4 options to collect the information: {
        Type<Dropdown>: [Expense, Income],
        Amount<number>: XX.XX,
        Source<string>: Rent,
        Frequency<Dropdown>: [Weekly, Bi-Weekly, Monthly],
      }
      - 



  */

  return(

    <>
    <NewTransactionModal changeModal={changeModal} modalOpen={modalOpen} transactions={transactions} setTransactions={setTransactions}  />
    <button style={{gridArea:"button"}}   onClick={()=>{changeModal(!modalOpen)}} >Add Transaction</button>
    <div style={{gridArea:"transactions", display:"flex"}}>
  
      <Income   incomeList={transactions.income} />
      
      
      <Expenses expenseList={transactions.expenses} /> 
      
    </div>
    </>
  )


}