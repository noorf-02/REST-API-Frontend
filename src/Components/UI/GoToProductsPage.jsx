import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export default function GoToProductsPage() {
  return (
    <div className="wrapper h-[50vh] flex items-center">
      <Link
        to="/getProducts"
        className="bg-[#879a77] text-white py-2 px-3 rounded-3xl capitalize hover:bg-[#798b6a] transition-all duration-300 cursor-pointer"
      >
        browse products <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}
