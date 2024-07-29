import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./useContext";

const Navbar = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="bg-orange-400 h-12 flex items-center justify-evenly font-bold text-xl">
      <Link to="/">
        <div className="bg-white p-1 m-2 cursor-pointer">Home</div>
      </Link>
      <Link to="/cart">
        <div className="bg-white p-1 m-2 cursor-pointer">
          Cart: {cartItem.length > 0 && cartItem.length}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
