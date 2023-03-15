import './Header.css';

const Header = () => {
  return (
    <header className="text-white bg-header bg-slate-200 h-40 relative z-10">
      <div className="h-full w-full bg-neutral-900 opacity-70 absolute z-20"></div>
      <div className="w-full h-full flex flex-col justify-center items-center absolute z-30">
        <h1 className="text-3xl font-bold">¡Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar!</p>
        <div className="h-px w-3/4 mt-8 bg-white opacity-25"></div>
      </div>
    </header>
  );
};

export default Header;
