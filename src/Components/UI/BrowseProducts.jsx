import React, { useEffect, useState } from "react";

const url = "http://localhost:5000/products";
export default function BrowseProducts() {
  const [value, setValue] = useState([]);
  async function getProducts() {
    const api = await fetch(url);
    const res = await api.json();
    setValue(res);
    console.log(res);
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className="wrapper">
      <h1>Total Products</h1>
      <div className="products"></div>
    </div>
  );
}
