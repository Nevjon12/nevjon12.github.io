import { GraphProps } from "../interfaces";

export default function GraphContainer(props: GraphProps){

  const vDataState = props.vDataState;
  const graphType = vDataState.currentView


  return(

    <div style={{gridArea:"graph"} } className="budgetComponent" >
      Graph Container <br/>
      <div className="graph">
      
        Imagine this is a {graphType}<br /> <br />

      </div>
    </div>
  );


}