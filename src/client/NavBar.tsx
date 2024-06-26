import { Link } from "react-router-dom"


export default function NavBar(){



  return(

    <div className="navbar">
      <a> <Link to="/">Home </Link></a>
      <a> <Link to="/apptracker"> Job Application Hub </Link></a>
      <a> <Link to="/budgetVisualizer"> Budget Visualizer </Link></a>
    </div>

  )

}