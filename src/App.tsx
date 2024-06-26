import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './client/HomePage/HomePage'
import AppTrackerContainer from './client/ApplicationTrackerApp/AppTrackerContainer'
import BudgetVContainer from './client/BudgetVisualizer/BudgetVContainer'




function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/apptracker" element={<AppTrackerContainer/>} />
        <Route path="/budgetVisualizer" element={<BudgetVContainer/>} />
      </Routes>
    </>
  )
}

export default App
