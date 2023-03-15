import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import { DataContext } from '../context/dataProvider';

import Button from '../components/Button';

import Navbar from '../components/Navbar';

const PizzasDetails = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();

  console.log(id);

  return (
    <div className="text-slate-600 bg-slate-100 h-screen">
      <Navbar />

      <div className="flex m-10 border rounded">
        <div className="w-1/3">
          <img
            src="https://picsum.photos/800/800"
            alt=""
            className="h-full rounded-l"
          />
        </div>
        <div className="flex flex-col justify-center px-8 w-2/3">
          <h1 className="py-5 border-b-2 border-slate-300 text-xl font-bold">
            Salame
          </h1>
          <p className="py-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae facere doloribus debitis assumenda consectetur
            blanditiis rem, et reprehenderit ducimus ut perferendis quasi hic
            ullam id commodi possimus pariatur iste quam. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Repudiandae facere doloribus
            debitis assumenda consectetur blanditiis rem, et reprehenderit
            ducimus ut perferendis quasi hic ullam id commodi possimus pariatur
            iste quam.
          </p>
          <div>
            <p className="text-sm font-bold pb-3">Ingredientes:</p>
            <ul className="pl-3">
              <li className="text-sm">🍕 Mozarella</li>
              <li className="text-sm">🍕 Mozarella</li>
              <li className="text-sm">🍕 Mozarella</li>
              <li className="text-sm">🍕 Mozarella</li>
            </ul>
          </div>
          <div className="flex justify-between mt-3">
            <p className="font-bold text-2xl">Precio: $5.990</p>
            <Button bgColor="bg-red-500" text="Añadir 👀" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzasDetails;
