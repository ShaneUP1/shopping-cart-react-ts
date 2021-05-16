import React, { useContext } from 'react';
import Main from '../Container/Main';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CartPage from './Cart/CartPage';
import Header from './Header/Header';
import { CartProvider, useUpdateCart } from '../state/CartContext';

const App: React.FC = () => {
  const [cart, setCart] = useUpdateCart<ITc();
  return (
    <>
      <Router>
        <CartProvider>
          <Header />
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/cart' exact component={CartPage} />
            </Switch>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
