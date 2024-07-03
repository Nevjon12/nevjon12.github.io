import { Line } from "react-chartjs-2"
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend } from "chart.js"
import { Data } from "./Data";

export default function LineGraph(){

  ChartJS.register(  
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  const options = {
    
  };




return(
  
    <div className="graph">
    Graph
    <Line options={options} data={Data}/>
    </div>
)


}
