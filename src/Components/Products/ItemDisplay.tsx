import React from 'react';
import styles from './ItemDisplay.module.css';

interface Props {
  name: string,
  image: string,
  description: string,
  price: number
}

const ItemDisplay: React.FC<Props> = ({name, image, description, price}) => {
  const adjustedPrice = price.toFixed(2)
  
  return (
    <div className={styles.itemCard}>
      <img className={styles.itemImage} src={`Assets/${image}`} alt={name} />
      <h1 className={styles.name}>{name}</h1>
      <h3>${adjustedPrice}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ItemDisplay
