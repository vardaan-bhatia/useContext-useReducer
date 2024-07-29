import React from "react";
import { useContext } from "react";
import { CartContext } from "./useContext";

const Itemlist = ({ prod }) => {
  const { title, image, price, category, rating, id } = prod;
  const { cartItem, setCartItem } = useContext(CartContext);

  const handleAdd = () => {
    setCartItem([...cartItem, prod]);
  };
  const handleRemove = () => {
    setCartItem(cartItem.filter((e) => e.id !== id));
  };
  return (
    <div className="m-8 p-5 h-50 w-80 bg-white shadow-lg rounded-lg flex flex-col items-center ">
      <img src={image} alt="" className="h-60 w-auto" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="mt-4">
        <b>Price</b> :{Math.floor(price)}
      </p>
      <p>{category}</p>
      <p>
        <b>Rating</b>: {rating.rate}
      </p>
      <div>
        <button
          type="button"
          className="p-2 mt-5 rounded-md bg-blue-500 text-white mr-2"
          onClick={handleAdd}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="p-2 mt-5 rounded-md bg-blue-500 text-white ml-2"
          onClick={handleRemove}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Itemlist;
