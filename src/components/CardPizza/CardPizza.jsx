import { Button, Card } from "react-bootstrap";
import "./CardPizza.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <Card.Text>
          <p>
            <b>Ingredientes:</b>
          </p>
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <span>
            <b>Precio:</b> ${price.toLocaleString()}
          </span>
        </Card.Text>
        <div className="split-buttons">
          <Button variant="primary">Ver Más</Button>
          <Button variant="primary">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
