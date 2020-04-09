import React from "react";
import TopNav from "./components/TopNav";
import CartProvider from "./context/CartProvider";
import Dashboard from "./screens/Dashboard";


const App = () => {
  return (
    <CartProvider>
      <TopNav />
      <Dashboard />
    </CartProvider>
  );
};

export default App;
