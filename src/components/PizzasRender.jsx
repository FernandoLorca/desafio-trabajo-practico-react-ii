import { useContext } from 'react';
import { DataContext } from '../context/dataProvider';

import Button from './Button';

const PizzasRender = () => {
  // Se usa el hook useContext para consumir el contexto creado en 'context/dataProvider'
  const { data } = useContext(DataContext);

  return (
    <div className="grid grid-cols-4 gap-5 py-5 px-10 justify-items-center">
      {data.map(pizzas => (
        <div className="w-full border border-slate-300 rounded" key={pizzas.id}>
          <div className="w-full">
            <img
              src={pizzas.img}
              alt={`Pizza ${pizzas.name}`}
              className="rounded-t"
            />
          </div>
          <div className="mx-3">
            <h3 className="py-3 text-xl font-bold border-b-2 border-slate-300">
              {pizzas.name.charAt(0).toUpperCase() + pizzas.name.slice(1)}
            </h3>
            <p className="py-3 text-sm font-bold">Ingredientes:</p>
            <ul className="pl-3">
              {pizzas.ingredients.map((ingredient, i) => (
                <li className="text-sm" key={i}>
                  🍕 {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-1 border-b-2 my-5 border-slate-300"></div>
          <p className="text-center text-2xl text-cyan-500">
            ${' '}
            {`${pizzas.price.toString().slice(0, 1)}.${pizzas.price
              .toString()
              .slice(1)}`}
          </p>
          <div className="flex justify-center gap-2 my-3">
            <Button bgColor="bg-cyan-500" text="Ver más 👀" />
            <Button bgColor="bg-red-500" text="Añadir 🛒" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzasRender;
