import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AppTrackerContainer from './client/ApplicationTrackerApp/AppTrackerContainer.tsx';
import NavBar from './client/NavBar.tsx';
import HomePage from './client/OtherApp/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/apptracker",
    element: <AppTrackerContainer/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);