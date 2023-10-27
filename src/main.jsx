import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "signup",
    element: <SignUpPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
