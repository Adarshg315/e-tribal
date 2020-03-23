import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartItem from '../components/CartItem';

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
    const classes = useStyles();
    const [cart, setCart] = useState([]);
    
    const allItems = [{
        title: 'Product1',
        date: new Date(),
        // img: '/Users/Saharsh/Adarsh/e-tribal/public/Dokra-5.webp',
        description: 'this is product discription. this is product discriptionthis is product discription'
    }];

    const handleAddItem = (item) => {
        let tempCart = cart.slice();
        tempCart.push(item);
        setCart(tempCart);
    }

    const handleRemoveItem = (item) => {
        let tempCart = cart.slice();
        tempCart.splice(tempCart.findIndex(it => it.title===item.title), 1);
        setCart(tempCart);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h2>Products</h2>
                        {allItems.map((item)=>(
                            <CartItem key={item.title} item={item} addItem={handleAddItem}/>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h2>Cart</h2>
                        {cart.map((item)=>(
                            <CartItem key={item.title} item={item} removeItem={handleRemoveItem}/>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;