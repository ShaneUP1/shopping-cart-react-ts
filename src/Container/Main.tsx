import React, { useContext } from 'react'
import ProductPage from '../Components/Products/ProductPage';
import { CartContext } from '../state/CartContext';

const Main: React.FC = () => {

  const {cart, setCart} = useContext<ITcartitem[]>(CartContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const element = e.currentTarget as HTMLButtonElement
    const value = element.value
    setCart([...cart, value]);
  }

  return (
    <>
      <ProductPage handleClick={handleClick} />
    </>
  )
}

export default Main
