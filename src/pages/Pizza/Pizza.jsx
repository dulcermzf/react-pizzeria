import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Pizza.css";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams()

  const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await res.json();

    setPizza(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) return <></>;

  return (
    <div className="pizza-container mx-5">
      <h2 className="my-3">
        Pizza <span className="capitalize">{pizza.name}</span>
      </h2>
      <div className=" d-flex">
        <img className="pizza-img" src={pizza.img} alt={pizza.name} />
        <div className="info-container mx-3">
          <p>{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => {
              return (
                <li className="capitalize" key={index}>
                  {ingredient}
                </li>
              );
            })}
          </ul>
          <p>
            Price: <b>${pizza.price.toLocaleString()}</b>
          </p>
          <Button>Añadir</Button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
