import { useContext, useState } from "react";
import { pizzaCart } from "../../assets/pizza";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const Cart = () => {
  const { cart, addPizza, removePizza, getTotal } = useContext(CartContext)
  const { token } = useContext(UserContext)
  const total = getTotal()

  return (
    <div className="cart-container d-flex justify-content-center align-items-center flex-column">
      <h2 className="my-5">Detalles del pedido</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-item d-flex justify-content-between align-items-center"
          >
            <div className="name-image-container">
              <img className="item-img" src={item.img} alt={item.name} />
              <span className="item-name">{item.name}</span>
            </div>
            <div className="price-count-container d-flex justify-container-center align-items-center">
              <span className="item-price mx-3">
                ${item.price.toLocaleString()}
              </span>
              <div className="count-container">
                <Button variant="outline-danger" onClick={() => removePizza(item)}>
                  -
                </Button>
                <span className="mx-3">{item.count}</span>
                <Button
                  variant="outline-primary"
                  onClick={() => addPizza(item)}
                >
                  +
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="total">
        Total: <b>${total.toLocaleString()}</b>
      </p>
      <Button
        variant="primary"
        disabled={!token}
        onClick={() => { console.log('buy') }}
      >
        Comprar
      </Button>
    </div>
  );
};

export default Cart;
