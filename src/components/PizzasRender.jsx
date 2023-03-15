import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/dataProvider';

import Button from './Button';

const PizzasRender = () => {
  // Se usa el hook useContext para consumir el contexto creado en 'context/dataProvider'
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  const handleClickButton = pizzaId => navigate(`/pizza/${pizzaId}`);

  return (
    <div className="grid grid-cols-4 gap-5 py-5 px-10 justify-items-center">
      {data.map(pizza => {
        return (
          <div
            className="w-full border border-slate-300 rounded"
            key={pizza.id}
          >
            <div className="w-full">
              <img
                src={pizza.img}
                alt={`Pizza ${pizza.name}`}
                className="rounded-t"
              />
            </div>
            <div className="mx-3">
              <h3 className="py-3 text-xl font-bold border-b-2 border-slate-300">
                {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
              </h3>
              <p className="py-3 text-sm font-bold">Ingredientes:</p>
              <ul className="pl-3">
                {pizza.ingredients.map((ingredient, i) => (
                  <li className="text-sm" key={i}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-1 border-b-2 my-5 border-slate-300"></div>
            <p className="text-center font-bold text-2xl text-cyan-500">
              {`$ ${pizza.price.toString().slice(0, 1)}.${pizza.price
                .toString()
                .slice(1)}`}
            </p>
            <div className="flex justify-center gap-2 my-3">
              <Button
                bgColor="bg-cyan-500"
                text="Ver más 👀"
                clickFunction={() => handleClickButton(pizza.id)}
                id={pizza.id}
              />
              <Button bgColor="bg-red-500" text="Añadir 🛒" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PizzasRender;
