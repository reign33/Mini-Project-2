import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { HomePage, SearchResults, ProductPage, Checkout, LoginPage, SignUpPage, SideBarPage, Navbar, Footer } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
                {/* Admin routes */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/signup" element={<SignUpPage />} />
        <Route path="/admin/dashboard" element={<SideBarPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;