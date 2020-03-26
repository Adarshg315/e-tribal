import React from 'react';
import TopNav from './components/TopNav'
import Dashboard from './screens/Dashboard'
import { CartContext } from './context/CartContext';

// const value = React.useContext(CartContext);

const App = () => {
  const [cart, setCart] = React.useState(5);
  const updateCart = (newCart) => {
    setCart(newCart)
  };
  
  return (
    <CartContext.Provider value={{cart, updateCart}}>
      <TopNav/>
      <Dashboard/>
    </CartContext.Provider>
  )
}

export default App;