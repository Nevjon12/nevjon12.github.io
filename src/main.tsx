import ReactDOM from 'react-dom/client'
import {
  HashRouter,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavBar from './client/NavBar.tsx';
import App from './App.tsx';



const theme = createTheme({
  // Customize your theme here
});


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   
    
    <HashRouter>
  
      <NavBar/>
   
      <br />
      <App />
      
    </HashRouter>

);


