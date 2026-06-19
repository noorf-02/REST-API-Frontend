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

      <div className="products-container flex flex-wrap justify-center items-center gap-10 my-6">
        {value.map((myProduct) => {
          console.log(myProduct);

          return (
            <div className="card w-[350px] justify-center border-white rounded-3xl p-6 bg-white shadow-xl flex flex-col gap-2"> 
              <img src={myProduct.Image} alt="" className="w-[150px] h-[150px] object-cover block m-auto rounded-3xl" />
              <h1 className="text-2xl font-medium">{myProduct.ProductName}</h1>
              <p>{myProduct.ProductDescription}</p>
              <div className="price flex justify-between items-center">
                <p className="italic text-gray-500 text-[12px]">{myProduct.Category}</p>
                <p className="py-1 px-3 rounded-[10px] bg-[#879a77] text-white">${myProduct.Price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
