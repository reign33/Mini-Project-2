import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { HomePage, SearchResults, ProductPage, Checkout, LoginPage, SignUpPage, Navbar, Footer} from "./components";
import Dashboard from "./admin/Dashboard";
import AllCategory from "./admin/AllCategory";
import UpdateCategory from "./admin/UpdateCategory";
import AddCategory from "./admin/AddCategory";
import ReportCategory from "./admin/ReportCategory";
import AddProduct from "./admin/AddProduct";
import AllProduct from "./admin/AllProduct";
import ReportProduct from "./admin/ReportProduct";
import Order from "./admin/Order";


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
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/addcategory" element={<AddCategory/>} />
        <Route path="/admin/updatecategory/:id" element={<UpdateCategory/>} />
        <Route path="/admin/allcategory" element={<AllCategory/>} />
        <Route path="/admin/reportcategory" element={<ReportCategory/>} />
        <Route path="/admin/addproduct" element={<AddProduct/>} />
        <Route path="/admin/allproduct" element={<AllProduct/>} />
        <Route path="/admin/reportproduct" element={<ReportProduct/>} />
        <Route path="/admin/order" element={<Order/>} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;