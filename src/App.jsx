import React from "react";
import Nav from "./Components/SHARED/Nav";
import ProductsPage from "./Pages/ProductsPage";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/getProducts" element={<ProductsPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
