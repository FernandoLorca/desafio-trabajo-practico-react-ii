import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Cart = () => {
  return (
    <div className="text-slate-600 bg-slate-100 h-screen">
      <Navbar />

      <div className="m-10 flex flex-col items-center">
        <div className="w-9/12">
          <h1 className="mb-1 font-bold text-xl">Detalles del producto:</h1>
        </div>
        <div className="w-9/12 bg-white">
          <ul>
            <li className="flex justify-between py-5 px-5 items-center border-b-2 border-slate-300">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-black">
                  <img src="" alt="" />
                </div>
                <p>Salame</p>
              </div>
              <div className="flex gap-5">
                <p className="text-cyan-500 font-bold text-xl">$35.940</p>
                <div className="flex gap-2">
                  <p className="bg-red-500 px-2 rounded text-white font-bold hover:opacity-75 cursor-pointer">
                    -
                  </p>
                  <p>6</p>
                  <p className="bg-cyan-500 px-2 rounded text-white font-bold hover:opacity-75 cursor-pointer">
                    +
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="m-5">
            <p className="text-4xl mb-5">Precio: $134.640</p>
            <Button bgColor="bg-cyan-500" text="Ir a Pagar" path="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
