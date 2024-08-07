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
    plugins: {
      title: {
        display: true,
        text: "Running Balances for Selected Period"
      },
      legend: {
          display: false
        }
    },

    scales: {
      x: {
        ticks: {
          display:false  
        }
      },
      y: {
        suggestedMin: -100,
        suggestedMax: 100
      }

    }
  };




return(
  
    <div className="graph">
    <Line options={options} data={Data}/>
    </div>
)


}
