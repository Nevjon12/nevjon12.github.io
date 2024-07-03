import { useState } from "react";
import Expenses from "./transactionComponents/Expenses";
import Income from "./transactionComponents/Income";
import NewTransactionModal from "./transactionComponents/transactionModals/NewTransactionModal";


export default function Transactions(props){

  const transactions = props.transactions;
  const setTransactions = props.setTransactions;

  const [modalOpen, changeModal] = useState(false);


  /*
    What does this do?:
      -it adds a new transaction
    How?:
      - A modal with 4 options: {
        Type<Dropdown>: [Expense, Income],
        Amount<number>: XX.XX,
        Source<string>: Rent,
        Frequency<Dropdown>: [Weekly, Bi-Weekly, Monthly],
      }



  */

  return(

    <>
    <NewTransactionModal changeModal={changeModal} modalOpen={modalOpen} />
    <button style={{gridArea:"button"}}   onClick={()=>{changeModal(!modalOpen)}} >Add Transaction</button>
    <div style={{gridArea:"transactions", display:"flex", width:"100%"}}>
  
      <Income   incomeList={transactions.income} />
      
      
      <Expenses expenseList={transactions.expenses} /> 
      
    </div>
    </>
  )


}