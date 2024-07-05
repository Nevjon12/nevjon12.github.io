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


export default function LineGraph(props){

  ChartJS.register(  
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const Data = props.Data

  const options = {
    
  };




return(
  
    <div className="graph">
    Graph
    <Line options={options} data={Data}/>
    </div>
)


}
