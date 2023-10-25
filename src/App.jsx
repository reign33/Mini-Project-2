import React from "react"
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage"
import "./index.css"
import HomePage from "./components/HomePage"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <LoginPage />
    <Footer />
    </>
  )
}

export default App
