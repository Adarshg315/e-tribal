import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Dashboard = () => {
    // const {} = useContext(contextValue);
    const classes = useStyles();
    const [cart, setCart] = useState([]);
    
    const allItems = [
        {
        title: 'Product1',
        date: new Date(),
        // img: '/Users/Saharsh/Adarsh/e-tribal/public/Dokra-5.webp',
        description: 'this is product discription. this is product discriptionthis is product discription'
        },
        {
        title: 'Product2',
        date: new Date(),
        // img: '/Users/Saharsh/Adarsh/e-tribal/public/Dokra-5.webp',
        description: 'this is product discription. this is product discriptionthis is product discription'
        }
    ];

    const products = allItems.map(it=>({...it, count: 0}));

    const handleAddProduct = (productToBeAdded) => {
        let tempCart = cart.slice();
        const found = tempCart.some(el => el.title === productToBeAdded.title);

        if(found) {
            tempCart.map(prod=>{
                if(prod.title === productToBeAdded.title) {
                    prod.count++
                    console.log(prod)
                }
                return prod;
            });
        } else {
            tempCart.push(productToBeAdded);
        }
        setCart(tempCart);
    }

    const handleRemoveItem = (item) => {
        let tempCart = cart.slice();
        if(item.count === 0){
            tempCart.splice(tempCart.findIndex(it => it.title===item.title), 1);
        }
        else {
            item.count--;
        }
        setCart(tempCart);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h2>Products</h2>
                        {products.map((item)=>(
                            <ProductCard key={item.title} item={item} addItem={handleAddProduct}/>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h2>Cart</h2>
                        {cart.map((item)=>(
                            <ProductCard key={item.title} item={item} removeItem={handleRemoveItem}/>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;