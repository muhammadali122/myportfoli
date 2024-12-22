import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
        <ToastContainer closeButton={false} theme="colored" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
