import Expenses from "./transactionComponents/Expenses";
import Income from "./transactionComponents/Income";


export default function Transactions(props){

  const transactions = props.transactions;

  /*
    GOALS:
      - Must have its own delete function
      - Must be able to accommodate both positive and negative transactions and sort them


  */

  return(
    <>
    <button style={{gridArea:"button"}}>Edit Transactions</button>
    <div style={{gridArea:"transactions", display:"flex", width:"100%"}}>
  
      <Income   incomeList={transactions.income} />
      
      
      <Expenses expenseList={transactions.expenses} /> 
      
    </div>
    </>
  )


}