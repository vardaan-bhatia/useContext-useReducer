import { useState, createContext } from "react";

export const CartContext = createContext();
const Context = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
export default Context;
