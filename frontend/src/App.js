import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProduct from "./components/create-product.component";
import CreateUser from "./components/create-user.component";
import EditProduct from "./components/edit-product.component";
import Navbar from "./components/navbar.component";
import ProductsList from "./components/products-list.component";
// import TopNav from "./components/TopNav";
import CartProvider from "./context/CartProvider";
// import Dashboard from "./screens/Dashboard";
const App = () => {
  return (
    <CartProvider>
      {/* <TopNav />
      <Dashboard /> */}
      <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ProductsList} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
