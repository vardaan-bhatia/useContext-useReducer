import React, { useContext } from "react";
import Itemlist from "./Itemlist";
import { CartContext } from "./useContext";
const Cart = () => {
  const { cartItem } = useContext(CartContext);
  const pricecal = cartItem.reduce((a, e) => a + e.price, 0);
  return (
    <>
      <div className="text-xl mt-8 flex flex-col items-center justify-center">
        <h1>Price: ${Math.floor(pricecal)}</h1>
      </div>
      <div className="mt-5 flex flex-wrap justify-center">
        {cartItem.map((e) => (
          <Itemlist prod={e} key={e.id} />
        ))}
      </div>
    </>
  );
};

export default Cart;
