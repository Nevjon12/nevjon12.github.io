import ReactDOM from 'react-dom/client'
import {
  HashRouter,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavBar from './client/NavBar.tsx';
import App from './App.tsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   
    
    <HashRouter>
  
      <NavBar/>
   
      <br />
      <App />
      
    </HashRouter>

);


