import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
        <ToastContainer closeButton={false} style={{ backgroundColor:"transparent" }}/>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
