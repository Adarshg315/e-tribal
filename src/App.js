import React from 'react';
import TopNav from './components/TopNav'
import Dashboard from './screens/Dashboard'
import CartProvider from './context/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <TopNav />
      <Dashboard />
    </CartProvider>
  )
}

export default App;