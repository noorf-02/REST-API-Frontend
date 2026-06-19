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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text-2xl font-medium">Total Products {value.length}</h1>

      <div className="products">
        {value.map((myProduct) => {
          console.log(myProduct);

          return (
            <div>
              <img src={myProduct.Image} alt="" />
              <h1>{myProduct.ProductName}</h1>
              <p>{myProduct.ProductDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
