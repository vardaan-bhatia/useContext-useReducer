import React, { useEffect, useState } from "react";
import axios from "axios";
import Itemlist from "./Itemlist";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;

      setProducts(data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((prod) => (
        <Itemlist key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
