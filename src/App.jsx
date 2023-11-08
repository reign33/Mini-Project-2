import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import {HomePage, SearchResults, ProductPage, Checkout, LoginPage, SignUpPage, SideBarPage} from "./Components";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Navbar /> 
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/sidebar" element={<SideBarPage />} />
        <Footer />
      </Routes>
<<<<<<< HEAD
      <Routes>
        
        <Route path="/sidebar" element={<SideBarPage />} />
      </Routes>
      
=======
>>>>>>> cde03f41529b70fe5a9a104120e686c49ea62685
    </BrowserRouter>
  )
}

export default App