import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import {HomePage, SearchResults, ProductPage, Checkout, LoginPage, SignUpPage, SideBarPage, SidebarAddCategory, Navbar, Footer} from "./Components";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Router exact path="/" element={<><Navbar /><HomePage /><Footer /></>}/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/sidebar" element={<SideBarPage />}>
          <Route path="addcategory" element={<SidebarAddCategory/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App