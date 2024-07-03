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



  const [transactions, setTransactions] = useState<Adjustment>({

      expenses: [ {day:"Date1", amount:-5, expense:"Shudder"}, {day:"Date2", amount:-900, expense:"Rent"} ],

      income: [ {day:"Date1", amount:20, expense:"DogWalk"}, {day:"Date3", amount:600, expense:"PayDay"} ],

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
  
  const currentlyStoredData = JSON.parse(localStorage.getItem('VData'));



  const [vDataState , setVDataState] = useState<GraphData>(currentlyStoredData || {
    currentBalance: parseFloat(parseFloat("1.00").toFixed(2)),
    currentView: "Line Graph",
    viewPeriod: [undefined,undefined],
    baseLine: 50,
    goalBalance: 100,
  });








  return(
    <>
      
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="budgetVisualizer" >
          <h1>Budget Visualizer goes here</h1> 
          <GraphContainer  //most of therse props will be replaced once we confirm state is being updated correctly
              vDataState={vDataState}
          /> 
          <br />
          <CurrentBalance vDataState={vDataState} setVDataState={setVDataState}/> <br />
          <VisualSettings 
            vDataState={vDataState}
            setVDataState={setVDataState}
          /> <br />
          <Transactions transactions = {transactions} />
          
        </div>
      </LocalizationProvider>
    </>
  )


}