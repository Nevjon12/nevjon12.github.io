import { GraphProps } from "../interfaces";
import LineGraph from "./graphComponents/LineGraphV";



export default function GraphContainer(props: GraphProps){


  const vDataState = props.vDataState;
  const expenses = vDataState.transactions.expenses;
  const income = vDataState.transactions.income;
  const currentBalance = vDataState.currentBalance;

  const collectDataForGraph = (income, expenses)=> {
   


    const newData= {};


    for(const transaction of income){
      if(!newData[transaction.date]){
      newData[transaction.date] = [Number(transaction.amount)];
      } else {
        const dateDataArray = newData[transaction.date];
        dateDataArray.push(Number(transaction.amount))
        newData[transaction.date] = dateDataArray;
      }
    }
    
    for(const transaction of expenses){
      if(!newData[transaction.date]){
      newData[transaction.date] = [-[transaction.amount]];
      } else {
        const dateDataArray = newData[transaction.date];
        dateDataArray.push(-transaction.amount)
        newData[transaction.date] = dateDataArray;
      }
    }

    return(newData)
  }

  const collectedData = collectDataForGraph(income, expenses);

  

  const sumUpAllDailyBalances = (balance, dataCollected)=>{
    const orderedTransactions = Object.entries(dataCollected).sort()
    
    const formattedData = {};
    
    orderedTransactions.forEach((day)=>{
      const date = day[0]
      const transactions : number[] = day[1] as number[];
      const dailyTotal = transactions.reduce((acc:number, value:number) => acc + value, balance);
      balance = dailyTotal                      
      
      formattedData[date] = dailyTotal
    })
    
    
    return(formattedData)

  }

  const processedData = sumUpAllDailyBalances(currentBalance, collectedData);




  const Data={

    labels : Object.keys(processedData), //Object.keys(newData.runningBalance)

    datasets: [
      {
        label:"Counts per year",
        data: Object.values(processedData) //Object.values(newData.runningBalance)
      }
    ]
  };



  return(

    <div style={{gridArea:"graph", maxHeight:"100%%", maxWidth:"150%", display:'contents'} }>
      <LineGraph Data={Data}/>
    </div>
  );


}