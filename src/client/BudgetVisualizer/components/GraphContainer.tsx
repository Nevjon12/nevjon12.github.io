import { GraphProps } from "../interfaces";

export default function GraphContainer(props: GraphProps){

  const vDataState = props.vDataState;



  return(

    <div style={{gridArea:"graph"} } className="budgetComponent" >
      Graph Container <br/>
      <div className="graph">
      
        Imagine this is a graph <br /> <br />

      </div>
    </div>
  );


}