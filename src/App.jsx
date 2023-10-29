import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import "./index.css"
import Navbar from "./components/Navbar"
import { HomePage, Checkout, SearchResult, ProductPage,
} from "./components";
import LoginPage from './components/LoginPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'

// changes update
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App