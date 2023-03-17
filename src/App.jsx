import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Cart from "./pages/Cart";
import PizzasDetails from "./pages/PizzasDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/pizza/:id" element={<PizzasDetails />} />
      <Route path="/carrito" element={<Cart />} />
    </Routes>
  );
}

export default App;
