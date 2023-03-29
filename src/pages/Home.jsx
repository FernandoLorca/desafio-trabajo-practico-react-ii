import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="text-slate-600">
      <Navbar />

      <div className="bg-slate-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl text-slate-700 font-bold">
          🍕 Bienvenido a Pizzeria Mamma Mia! 🍕
        </h1>
        <div className="mt-5 text-2xl hover:underline hover:opacity-75">
          <Link to="/pizzas">Ir a Pizzas</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
