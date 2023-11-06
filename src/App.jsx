import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {HomePage, SearchResult, ProductPage, Checkout, LoginPage, SignUpPage, SideBarPage} from "./Components";


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
        <Route path="/sidebar" element={<SideBarPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App