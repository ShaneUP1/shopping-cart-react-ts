import React, { MouseEventHandler } from 'react';
import ItemDisplay from './ItemDisplay';
import fruits from '../../Data/fruit-data.js';
import styles from './ProductPage.module.css';

const ProductPage: React.FC = () => {

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const element = e.currentTarget as HTMLButtonElement
    const value = element.value
    
  }

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
