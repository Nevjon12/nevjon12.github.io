import ReactDOM from 'react-dom/client'
import {
  HashRouter,
} from "react-router-dom";
import './index.css'
import NavBar from './client/NavBar.tsx';
import App from './App.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <HashRouter>
  
      <NavBar/>
   
      <div style={{backgroundColor:"#36454F", height:"10px", borderRadius:"0px"}}></div>
      
      <App />
      <div style={{height:"100px", backgroundColor:"white"}}  ></div>
    </HashRouter>
);


