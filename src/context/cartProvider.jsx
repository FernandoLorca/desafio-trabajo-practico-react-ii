import { createContext, useContext } from 'react';

import { DataContext } from './dataProvider';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { data } = useContext(DataContext);

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
