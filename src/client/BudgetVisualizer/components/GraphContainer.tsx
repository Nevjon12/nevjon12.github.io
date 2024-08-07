import { GraphProps } from "../interfaces";
import LineGraph from "./graphComponents/LineGraphV";
import BarGraph from "./graphComponents/BarGraphV";



export default function GraphContainer(props: GraphProps){


  const vDataState = props.vDataState;
  const expenses = vDataState.transactions.expenses;
  const income = vDataState.transactions.income;
  const currentBalance = vDataState.currentBalance;
  const viewPeriod = vDataState.viewPeriod;
  const currentView = vDataState.currentView;
  


  const transactionsWithinPeriod = (income, expenses, viewPeriod) => {

    function addPeriodToDate(date, period) {
      const newDate = new Date(date);

      switch (period) {
        case 'weekly':
          newDate.setDate(newDate.getDate() + 7);
          break;
        case 'bi-weekly':
          newDate.setDate(newDate.getDate() + 14);
          break;
        case 'monthly':
          newDate.setMonth(newDate.getMonth() + 1);
          break;
        default:
          throw new Error('Invalid period specified');
      }

      return newDate;
    }

    const fullIncome = income;
    const recurrences = [];
    const fullExpenses = expenses;
    const endOfPeriod = new Date(viewPeriod[1]);
    
    for (const transaction of fullIncome){
      const newTransaction = {...transaction}; //making a copy of the current transaction
      let cDate = new Date(newTransaction.date) ; //storing the date currently stored in said transaction
      const frequency = newTransaction.frequency; //storing the frequency of the current transaction
    

      
      while(cDate < endOfPeriod){
        cDate = new Date(addPeriodToDate(cDate, frequency))
        recurrences.push({...newTransaction, date:cDate})
      }
    }
  
        for (const transaction of fullExpenses){
      const newTransaction = {...transaction};
      let cDate = new Date(newTransaction.date) ; 
      const frequency = newTransaction.frequency; 
      
      while(cDate < endOfPeriod){
        cDate = new Date(addPeriodToDate(cDate, frequency))
        recurrences.push({...newTransaction, date:cDate})
      }
    }


    const allData = [...fullIncome, ...recurrences];
    
    return (allData)
  };

  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const collectDataForGraphTest = (data)=> {
    
    const newData= {};


    for(const transaction of data){
      if(transaction.type === 'income'){
        if(!newData[transaction.date]){
          newData[transaction.date] = [Number(transaction.amount)];
        } else {
          const dateDataArray = newData[transaction.date];
          dateDataArray.push(Number(transaction.amount))
          newData[transaction.date] = dateDataArray;
        }
      }

      if(transaction.type === 'expense'){        
        if(!newData[transaction.date]){
          newData[transaction.date] = [-[transaction.amount]];
        } else {
          const dateDataArray = newData[transaction.date];
          dateDataArray.push(-transaction.amount)
          newData[transaction.date] = dateDataArray;
        }   
      }
    }
    
    return(newData)
  }
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const sumUpAllDailyBalances = (balance, dataCollected)=>{
    const orderedTransactions = Object.entries(dataCollected).sort(([date1], [date2]) => new Date(date1).getTime() - new Date(date2).getTime());
    
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

//Full process:
  const recurrences = transactionsWithinPeriod(income, expenses, viewPeriod)
  const collectedData = collectDataForGraphTest(recurrences);
  const summedUpBalances = sumUpAllDailyBalances(currentBalance, collectedData);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  const Data={

    labels : Object.keys(summedUpBalances), 

    datasets: [
      {
        label:"Counts per year",
        data: Object.values(summedUpBalances) 
      }
    ]
  };



  return(

    <div>
      
      {(currentView === 'Line Graph') ? <LineGraph Data={Data}/> : <BarGraph Data={Data} />}

    </div>
  );


}