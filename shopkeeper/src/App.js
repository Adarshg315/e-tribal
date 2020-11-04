import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateProduct from './components/create-product.component';
import CreateUser from './components/create-user.component';
import Editproduct from './components/edit-product.component';
import Navbar from './components/navbar.component';
import ProductsList from './components/products-list.component';
const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ProductsList} />
        <Route path='/edit/:id' component={Editproduct} />
        <Route path='/create' component={CreateProduct} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;
