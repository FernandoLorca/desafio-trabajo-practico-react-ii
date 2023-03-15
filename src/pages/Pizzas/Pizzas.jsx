import { useContext } from 'react';
import { DataContext } from '../../context/dataProvider';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header/Header';

const Pizzas = () => {
  // Se usa el hook useContext para consumir el contexto creado en 'context/dataProvider'
  const { data } = useContext(DataContext);

  return (
    <div className="text-slate-600 bg-slate-100 h-screen">
      <Navbar />
      <Header />
    </div>
  );
};

export default Pizzas;
