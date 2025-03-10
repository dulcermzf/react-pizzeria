import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const getTotal = () => {
    let total = 0;

    if(cart.length) {
      for (let cartPizza of cart) {
        total += (cartPizza.price * cartPizza.count)
      }
    }

    return total;
  };

  const addPizza = (pizza) => {
    let newCart = []
    const pizzaInCart = cart.find((cartPizza) => cartPizza.id === pizza.id);

    if (pizzaInCart) {
      newCart = cart.map((cartPizza) => 
        cartPizza.id === pizza.id
          ? { ...cartPizza, count: cartPizza.count + 1 }
          : cartPizza
      );
    } else {
      newCart = [...cart, {...pizza, count: 1}]
    }


    setCart(newCart);
  };

  const removePizza = (pizza) => {
    let newCart = []
    const pizzaInCart = cart.find((cartPizza) => cartPizza.id === pizza.id);

    if (pizzaInCart.count <= 1) {
      newCart = cart.filter((cartPizza) =>
        cartPizza.id !== pizza.id
      );
    } else {
      newCart = cart.map((cartPizza) =>
        cartPizza.id === pizza.id 
          ? { ...cartPizza, count: cartPizza.count - 1 }
          : cartPizza
      );
    }

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addPizza,
      removePizza,
      getTotal
    }}>{children}</CartContext.Provider>
  );
}