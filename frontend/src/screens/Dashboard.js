import Grid from '@material-ui/core/Grid';
import { default as React, useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import CartContext from '../context/CartContext';
import { DashboardStyles } from '../screens/ScreenStyles';
import axios from '../utils/axiosHelper';

const Dashboard = () => {
  const { cart, setCart } = useContext(CartContext);
  const classes = DashboardStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddProduct = (productToBeAdded) => {
    let tempCart = cart.slice();
    const found = tempCart.some((el) => el.title === productToBeAdded.title);

    if (found) {
      tempCart.map((prod) => {
        if (prod.title === productToBeAdded.title) {
          prod.count++;
        }
        return prod;
      });
    } else {
      tempCart.push(productToBeAdded);
    }
    setCart(tempCart);
  };

  return (
    <div className={classes.root}>
      <Grid id='dashboard-container' container>
        <Grid className={classes.paper} item xs={6}>
          <h2>Tribes</h2>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <h2>Products</h2>
          <Grid container id='products-list'>
            {products
              .map((it) => ({ ...it, count: 1 }))
              .map((item) => (
                <Grid xs={4} key={item.title} item>
                  <ProductCard item={item} addItem={handleAddProduct} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
