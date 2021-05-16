import React, { MouseEventHandler, useContext } from 'react';
import ItemDisplay from './ItemDisplay';
import fruits from '../../Data/fruit-data.js';
import styles from './ProductPage.module.css';
import { CartContext } from '../../state/CartContext';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const ProductPage: React.FC <Props> = ({handleClick}) => {
  

  
  const fruitElements = fruits.map(fruit => (
    <li key={fruit.id}
        style={{listStyleType: 'none'}}
      >
      <ItemDisplay fruit={fruit} handleClick={handleClick} />
    </li>
  ))

  return (
    <div className={styles.main}>
      {fruitElements}
    </div>
  )
}

export default ProductPage
