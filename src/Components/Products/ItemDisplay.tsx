import React, { MouseEventHandler } from 'react';
import styles from './ItemDisplay.module.css';

interface Props {
  fruit: {name: string,
  image: string,
  description: string,
  price: number},
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const ItemDisplay: React.FC<Props> = ({fruit, handleClick}) => {
  const adjustedPrice = fruit.price.toFixed(2)
  
  return (
    <div className={styles.itemCard}>
      <img className={styles.itemImage} src={`Assets/${fruit.image}`} alt={fruit.name} />
      <h1 className={styles.name}>{fruit.name}</h1>
      <h3>${adjustedPrice}</h3>
      <p>{fruit.description}</p>
      <button value={fruit.name} onClick={handleClick} >Add</button>
    </div>
  )
}

export default ItemDisplay
