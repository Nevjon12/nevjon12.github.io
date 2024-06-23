import { Link } from "react-router-dom"


export default function NavBar(){



  return(

    <div className="navbar">
      <a> <Link to="/">Home </Link></a>
      <a> <Link to="/apptracker"> App Tracker </Link></a>
    </div>

  )

}