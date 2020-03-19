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
        // img: 'imagepath',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
    }, {
        title: 'Product2',
        date: new Date(),
        // img: 'imagepath',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
    }, {
        title: 'Product3',
        date: new Date(),
        // img: 'imagepath',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
    }, {
        title: 'Product4',
        date: new Date(),
        // img: 'imagepath',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
    }, {
        title: 'Product5',
        date: new Date(),
        // img: 'imagepath',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
    }];

    const handleOnSelect = (item) => {
        let tempCart = cart.slice();
        tempCart.push(item);
        setCart(tempCart);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                        <h2>Products</h2>
                        {allItems.map((item)=>(
                            <CartItem key={item.title} item={item} onSelect={handleOnSelect}/>
                        ))}
                    </Paper>
                </Grid>
                
                <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <h2>Cart</h2>
                        {cart.map((item)=>(
                            <CartItem key={item.title} item={item}/>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;