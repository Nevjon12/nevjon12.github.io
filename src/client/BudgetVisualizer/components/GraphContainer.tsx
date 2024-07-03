import { GraphProps } from "../interfaces";
import LineGraph from "./graphComponents/LineGraphV";



export default function GraphContainer(props: GraphProps){


  const vDataState = props.vDataState;



  return(

    <div style={{gridArea:"graph", maxHeight:"100%%", maxWidth:"150%", display:'contents'} }>
      <LineGraph />
    </div>
  );


}