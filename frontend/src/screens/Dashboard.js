import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { default as React, useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CartContext from '../context/CartContext';
import axios from '../utils/axiosHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const classes = useStyles();
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
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>
              <br></br>Products
            </h1>
            {products
              .map((it) => ({ ...it, count: 1 }))
              .map((item) => (
                <ProductCard
                  key={item.title}
                  item={item}
                  addItem={handleAddProduct}
                />
              ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
