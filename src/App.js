import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
