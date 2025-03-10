import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardPizza.css";

const CardPizza = ({ name, price, ingredients, img, id, addPizza }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          Pizza <span className="capitalize">{name}</span>
        </Card.Title>
        <div className="my-3">
          <p>
            <b>Ingredientes:</b>
          </p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <span>
            <b>Precio:</b> ${price.toLocaleString()}
          </span>
        </div>
        <div className="split-buttons">
          <Link className="btn btn-primary" to={'/pizza/' + id} >Ver Más</Link>
          <Button onClick={addPizza} variant="primary">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
