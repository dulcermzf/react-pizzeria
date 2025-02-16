import { useState } from "react";
import { pizzaCart } from "../../assets/pizza";
import { Button } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const total = () => {
    let sum = 0;

    cart.forEach((item) => (sum += item.count * item.price));

    return sum.toLocaleString();
  };

  const decrease = (pizza) => {
    let newCart;

    if (pizza.count > 1) {
      newCart = cart.map((item) =>
        item.id === pizza.id
          ? {
              ...item,
              count: item.count - 1,
            }
          : item
      );
    } else {
      newCart = cart.filter((item) => item.id !== pizza.id);
    }

    setCart(newCart);
  };

  const increase = (pizza) => {
    setCart(
      cart.map((item) =>
        item.id === pizza.id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      )
    );
  };

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
                <Button variant="outline-danger" onClick={() => decrease(item)}>
                  -
                </Button>
                <span className="mx-3">{item.count}</span>
                <Button
                  variant="outline-primary"
                  onClick={() => increase(item)}
                >
                  +
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="total">
        Total: <b>${total()}</b>
      </p>
    </div>
  );
};

export default Cart;
