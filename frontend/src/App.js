import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/addProduct/AddProduct";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import EditProduct from "./pages/editProduct/EditProduct";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";

import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout";

import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { selectIsLoggedIn } from "./redux/features/auth/authSlice";

// Axios config
axios.defaults.withCredentials = true;

// Protected layout wrapper with sidebar + layout
const ProtectedRoutes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Sidebar>
      <Layout>
        <Outlet />
      </Layout>
    </Sidebar>
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
