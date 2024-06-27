import { useState, useEffect } from "react"
import GraphContainer from "./components/GraphContainer";
import CurrentBalance from "./components/CurrentBalance";
import VisualSettings from "./components/VisualSettings";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import { GraphData, Transaction } from "./interfaces";
import { Adjustment } from "./interfaces";



export default function BudgetVContainer(){

  //All state being manipulated by app:

  const [currentBalance, setCB ] = useState<number>(0);
  const [currentView, setV]= useState<string>("Line Graph");
  const [viewPeriod, setVPer]= useState<number>(6);
  const [baseLine, setBLine]= useState<number>(50);
  const [goalBalance, setGoal]= useState<number>(100);
  const [adjustments, setAdjustments] = useState<Adjustment[]>([{Day1: ["1", "3", "5"]} , {Day2: ["2", "4", "6"]}])
  const [expenseList, setExL]= useState<Transaction[]>([{day:"Date1", amount:-5, expense:"Shudder"}, {day:"Date2", amount:-900, expense:"Rent"} ]);
  const [incomeList, setIncL]= useState<Transaction[]>([{day:"Date1", amount:20, expense:"DogWalk"}, {day:"Date3", amount:600, expense:"PayDay"} ]);

  //localStorage template for state to be passed to visualizer

  const [vDataState , setVDataState] = useState<GraphData>(
    {

    currentBalance : currentBalance,
    currentView : currentView,
    viewPeriod : viewPeriod,
    baseLine : baseLine,
    goalBalance : goalBalance,
    adjustments : adjustments
  
    }
  ) 






  useEffect(()=>{ //have the application re-render based on any changes in state
      console.log('state changed')

      const visualizerDataString = localStorage.getItem('VData');
      const visualizerData = visualizerDataString ? JSON.parse(visualizerDataString) : [];

      setVDataState(visualizerData);
    
    }, [ 
      currentBalance,
      currentView,
      viewPeriod,
      baseLine,
      goalBalance,
      adjustments,
      expenseList,
      incomeList 
    ]); 




  return(
    <>
      <h1>Budget Visualizer goes here</h1> 
      <br />
      <div className="budgetVisualizer" >
        
        <GraphContainer  //most of therse props will be replaced once we confirm state is being updated correctly
            vDataState={vDataState}
        /> 
        <br />
        <CurrentBalance currentBalance={currentBalance} setCB={setCB }/> <br />
        <VisualSettings 
          currentView={currentView}
          setV={setV}
          viewPeriod={viewPeriod}
          setVPer={setVPer}
          baseLine={baseLine}
          setBLine={setBLine}
          goalBalance={goalBalance}
          setGoal={setGoal}
        /> <br />
        <Income   adjustments={adjustments} setAdjustments={setAdjustments} incomeList={incomeList} setIncL={setIncL} /> <br />
        <Expenses  adjustments={adjustments} setAdjustments={setAdjustments} expenseList={expenseList} setExL={setExL} /> 
        </div>
      
    </>
  )


}