export default function GraphContainer(props){

  // const vDataState = props.vDataState;



  return(

    <div style={{gridArea:"graph"} } className="budgetComponent" >
      Graph Container <br/>
      <div className="graph">
      
        Imagine this is a graph <br /> <br />
        Current View is {props.currentView} <br />
        Current Balance is {props.currentBalance} <br />
        Time Period Being Observed is {props.viewPeriod}th of Whenever <br />
        The Minimum Base Line Amount You'd Like To Keep Is {props.baseLine} <br />
        Your Savings Goal Is Currently {props.goalBalance} <br />
        Your List Of Expenses Includes The Following: {props.expenseList} <br />
        Your Sources Of Income Are As Follows: {props.incomeList} <br />
      </div>
    </div>
  );


}