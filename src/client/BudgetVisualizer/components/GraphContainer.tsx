import { GraphProps } from "../interfaces";
import LineGraph from "./graphComponents/LineGraphV";



export default function GraphContainer(props: GraphProps){


  const vDataState = props.vDataState;
  const expenses = vDataState.transactions.expenses;
  const income = vDataState.transactions.income;
  const currentBalance = vDataState.currentBalance;
  const viewPeriod = vDataState.viewPeriod;
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const setViewPeriodTemplate = (period, balance)=>{

    const startDate = new Date(period[0]);
    const endDate = new Date(period[1]);
    const dateRangeTemplate = {};
    
    for(let date= new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)){

      dateRangeTemplate[date.toISOString().split('T')[0]] = balance

    }

    return dateRangeTemplate
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const finalizeDataVisualization = (currentBalance, summedUpBalances, periodTemplate)=>{

    const finalizedData = {}

    let runningBalance = currentBalance;
    const balanceChanges = summedUpBalances;
    const balanceChangeDates = Object.keys(balanceChanges)
    const periodTable = Object.keys(periodTemplate);

    for (let i=0; i<periodTable.length; i++){

      if(!balanceChangeDates.includes(periodTable[i])){
        finalizedData[periodTable[i]] = runningBalance
      } else {
        runningBalance = balanceChanges[periodTable[i]];
        finalizedData[periodTable[i]] = runningBalance;
      }

    }

    return(finalizedData)

  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Full process:

  const collectedData = collectDataForGraph(income, expenses);
  const summedUpBalances = sumUpAllDailyBalances(currentBalance, collectedData);
  const periodTemplate = setViewPeriodTemplate(viewPeriod, currentBalance);

  const graphData = finalizeDataVisualization(currentBalance, summedUpBalances, periodTemplate)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  const Data={

    labels : Object.keys(graphData), //Object.keys(newData.runningBalance)

    datasets: [
      {
        label:"Counts per year",
        data: Object.values(graphData) //Object.values(newData.runningBalance)
      }
    ]
  };



  return(

    <div>
      <LineGraph Data={Data}/>
    </div>
  );


}