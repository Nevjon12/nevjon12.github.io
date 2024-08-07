import { Bar } from "react-chartjs-2"
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend } from "chart.js"


export default function BarGraph(props){

  ChartJS.register(  
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    BarController,
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
    <Bar options={options} data={Data}/>
    </div>
)


}
