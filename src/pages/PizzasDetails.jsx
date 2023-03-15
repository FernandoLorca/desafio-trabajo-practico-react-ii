import { useParams } from 'react-router-dom';

import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/dataProvider';

import Button from '../components/Button';
import Navbar from '../components/Navbar';

const PizzasDetails = () => {
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [pizzaSelected, setPizzaSelected] = useState([]);
  const { data } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    data.map(ingredient => setPizzaIngredients(ingredient.ingredients));
    const detailedPizzaSelected = id => {
      const pizzaSelected = data.filter(pizza => {
        if (pizza.id === id) return pizza;
      });
      setPizzaSelected(pizzaSelected);
    };
    detailedPizzaSelected(id);
  }, [id, data]);

  console.log(pizzaSelected);
  console.log(pizzaIngredients);

  return (
    <div className="text-slate-600 bg-slate-100 h-screen">
      <Navbar />

      {pizzaSelected.map((pizza, i) => (
        <div className="flex m-10 border rounded" key={i}>
          <div className="w-1/3">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              className="h-full rounded-l"
            />
          </div>
          <div className="flex flex-col justify-center p-8 w-2/3">
            <h1 className="py-5 border-b-2 border-slate-300 text-4xl font-bold">
              {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            </h1>
            <p className="py-5 text-sm">{pizza.desc}</p>
            <div>
              <p className="text-sm font-bold pb-3">Ingredientes:</p>
              <ul className="pl-3">
                {pizzaIngredients.map((ingredient, i) => (
                  <li className="text-sm" key={i}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-3">
              <p className="font-bold text-2xl">
                {`Precio: ${pizza.price.toString().slice(0, 1)}.${pizza.price
                  .toString()
                  .slice(1)}`}
              </p>
              <Button bgColor="bg-red-500" text="Añadir 👀" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzasDetails;
