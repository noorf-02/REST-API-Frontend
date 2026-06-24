import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const url = "http://localhost:5000/products";
export default function BrowseProducts() {
  const [value, setValue] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  async function getProducts() {
    const api = await fetch(url);
    const res = await api.json();
    setValue(res);
    console.log(res);
    setProducts(res);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function filtering(scategory) {
    setCategory(scategory);
    if (scategory === "all") {
      setValue(products);
    } else {
      setValue(products.filter((p) => p.Category === scategory));
    }
  }

  return (
    <div className="wrapper ">
      <div className="btns flex gap-2 my-3">
        <button
          className="py-2 px-3 rounded-3xl w-fit font-medium text-white bg-[#879a77] hover:bg-[#6c7d5e] transition-all duration-300 "
          onClick={() => filtering("all")}
        >
          All
        </button>
        <button
          className="py-2 px-3 rounded-3xl w-fit font-medium text-white bg-[#879a77] hover:bg-[#6c7d5e] transition-all duration-300 "
          onClick={() => filtering("Fruit")}
        >
          Fruit
        </button>
        <button
          className="py-2 px-3 rounded-3xl w-fit font-medium text-white bg-[#879a77] hover:bg-[#6c7d5e] transition-all duration-300 "
          onClick={() => filtering("MakeUp")}
        >
          MakeUp
        </button>
      </div>

      <h1 className="text-2xl font-medium">Total Products {value.length}</h1>

      <div className="products-container flex flex-wrap justify-center items-center gap-10 my-6">
        {value.map((myProduct) => {
          console.log(myProduct);

          return (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card w-[350px] justify-center border-white rounded-3xl p-6 bg-white shadow-xl flex flex-col gap-2"
            >
              <img
                src={myProduct.Image}
                alt=""
                className="w-[150px] h-[150px] object-cover block m-auto rounded-3xl"
              />
              <h1 className="text-2xl font-medium">{myProduct.ProductName}</h1>
              <p>{myProduct.ProductDescription}</p>
              <div className="price flex justify-between items-center">
                <p className="italic text-gray-500 text-[12px]">
                  {myProduct.Category}
                </p>
                <p className="py-1 px-3 rounded-[10px] bg-[#879a77] text-white font-medium">
                  ${myProduct.Price}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
