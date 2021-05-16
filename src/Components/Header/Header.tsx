import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <>
    <span className={styles.header}>
      <h1>My Fruit Stand</h1>
      <div className={styles.nav}>
        <Link className={styles.link} to='/cart'>Cart</Link>
        <Link className={styles.link} to='/'>Home</Link>
      </div>
    </span>
    </>
  )
}

export default Header
