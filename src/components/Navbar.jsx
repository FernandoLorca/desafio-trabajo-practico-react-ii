import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between bg-cyan-500 px-10 py-5 font-bold">
      <div>🍕 Pizzeria Mamma Mia!</div>
      <ul className="flex gap-3">
        <li>
          <NavLink className="hover:underline hover:opacity-75" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:underline hover:opacity-75" to="/pizzas">
            Pizzas
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:underline hover:opacity-75" to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
      <div>
        <p className="flex gap-2">
          <span>🛒</span> $134.640
        </p>
      </div>
    </div>
  );
};

export default Navbar;
