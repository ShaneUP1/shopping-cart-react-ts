import React, { useContext, useState, createContext, ReactNode  } from 'react';

export const CartContext = createContext<Partial<ITcartitem[]>>([]);

export function CartProvider ({children}: {children: ReactNode}) {
  const [cart, setCart] = useState<ITcartitem[]>([]);

  const updateCart = (id: string) => {
    for(let item of cart) {
      if (item.id === id) {
        item.quantity++
      }
      else setCart([...cart, {id: item.id, quantity: 1}]);
  }
}

  return (
    {children}
  );
};

export const useUpdateCart = () => {
  const { updateCart } = useContext(CartContext);
}
