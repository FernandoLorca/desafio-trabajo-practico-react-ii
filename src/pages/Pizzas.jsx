import Navbar from '../components/Navbar';
import Header from '../components/Header/Header';
import PizzasRender from '../components/PizzasRender';

const Pizzas = () => {
  return (
    <div className="text-slate-600 bg-slate-100">
      <Navbar />
      <Header />

      <PizzasRender />
    </div>
  );
};

export default Pizzas;
