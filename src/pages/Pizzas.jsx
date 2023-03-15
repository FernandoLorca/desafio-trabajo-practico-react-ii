import { useContext } from 'react';
import { DataContext } from '../context/dataProvider';

import Navbar from '../components/Navbar';
import Header from '../components/Header/Header';

const Pizzas = () => {
  // Se usa el hook useContext para consumir el contexto creado en 'context/dataProvider'
  const { data } = useContext(DataContext);

  return (
    <div className="text-slate-600 bg-slate-100 h-screen">
      <Navbar />
      <Header />

      <div className="grid grid-cols-4 gap-5 my-5 mx-10 justify-items-center">
        {data.map(pizzas => (
          <div className="w-full border" key={pizzas.id}>
            <div className="w-full bg-black">
              <img src={pizzas.img} alt={`PPizza ${pizzas.name}`} />
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
              <button className="bg-cyan-500 text-sm text-white p-2 rounded hover:opacity-75">
                Ver más 👀
              </button>
              <button className="bg-red-500 text-sm text-white p-2 rounded hover:opacity-75">
                Añadir 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizzas;
