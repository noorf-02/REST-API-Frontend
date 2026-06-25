import React from "react";
import Nav from "./Components/SHARED/Nav";
import ProductsPage from "./Pages/ProductsPage";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Components/SHARED/Nav"

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/getProducts" element={<ProductsPage/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
