import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import "./index.css"
import Navbar from "./components/Navbar"
import { HomePage, Checkout, SearchResult, ProductPage,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App