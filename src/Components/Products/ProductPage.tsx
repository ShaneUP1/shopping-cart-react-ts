import React from 'react';
import ItemDisplay from './ItemDisplay';
import fruits from '../../Data/fruit-data.js';
import styles from './ProductPage.module.css';

const ProductPage: React.FC = () => {

  const fruitElements = fruits.map(fruit => (
    <li key={fruit.id}
        style={{listStyleType: 'none'}}
      >
      <ItemDisplay {...fruit} />
    </li>
  ))

  return (
    <div className={styles.main}>
      {fruitElements}
    </div>
  )
}

export default ProductPage
