import { useState} from "react"
import GraphContainer from "./components/GraphContainer";
import CurrentBalance from "./components/CurrentBalance";
import VisualSettings from "./components/VisualSettings";
import { GraphData, Transaction } from "./interfaces";
import { Adjustment } from "./interfaces";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Transactions from "./components/Transactions";






export default function BudgetVContainer(){

  const currentlyStoredData = JSON.parse(localStorage.getItem('VData'));

  const [transactions, setTransactions] = useState<Adjustment>({

      expenses: [],

      income: [],

      totalExpenses: ()=>{return this.calculateTotal(this.expenses)},

      totalIncome: ()=>{return this.calculateTotal(this.income)},

      calculateTotal: (adjustment:Transaction[])=> {
        let total = 0;
        for (const transaction of adjustment){
          total = total += transaction.amount;
        }
        return total
      }

    });
  
  



  const [vDataState , setVDataState] = useState<GraphData>(currentlyStoredData || {
    currentBalance: parseFloat(parseFloat("0.00").toFixed(2)),
    currentView: "Line Graph",
    viewPeriod: [undefined,undefined],
    baseLine: 0,
    goalBalance: 0,
    transactions: transactions
  });

  console.log('State after declaring',vDataState)



  return(
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="budgetVisualizer" >
          <h1>Budget Visualizer</h1>
          <div style={{gridArea:"graph"}} >
          <GraphContainer  
              vDataState={vDataState}
          /> 
          </div>
          <br />

          <CurrentBalance vDataState={vDataState} setVDataState={setVDataState}/> 
          <br />

          <VisualSettings 
            vDataState={vDataState}
            setVDataState={setVDataState}
          /> 
          <br />

          <Transactions transactions = {transactions} setTransactions= {setTransactions} vDataState={vDataState} setVDataState={setVDataState}/>
          
        </div>
      </LocalizationProvider>
    </>
  )


}