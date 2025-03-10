import Header from "../../components/Header/Header";
import CardPizza from "../../components/CardPizza/CardPizza";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addPizza } = useContext(CartContext)

  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();

    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <div className="container mt-4">
          <div className="row">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="col-md-4 col-sm-6 col-12 mb-4">
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  id={pizza.id}
                  addPizza={() => addPizza(pizza)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
