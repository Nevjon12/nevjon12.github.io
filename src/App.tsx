import { Routes, Route } from 'react-router-dom'
import './App.css'
import AppTrackerContainer from './client/ApplicationTrackerApp/AppTrackerContainer'
import HomePage from './client/HomePage/HomePage'


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/apptracker" element={<AppTrackerContainer/>} />
      </Routes>
    </>
  )
}

export default App
