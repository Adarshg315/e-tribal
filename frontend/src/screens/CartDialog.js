import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import CartContext from "../context/CartContext";
//import CartContext from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = (props) => {
  const { open, handleClose } = props;
  const classes = useStyles();
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    let tempCart = cart.slice();
    if (item.count === 1) {
      tempCart.splice(
        tempCart.findIndex((it) => it.title === item.title),
        1
      );
    } else {
      item.count--;
    }
    setCart(tempCart);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cart
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h2>Cart</h2>
          {cart.map((item) => (
            <ProductCard
              key={item.title}
              item={item}
              removeItem={handleRemoveItem}
            />
          ))}
        </Paper>
      </Grid>
    </Dialog>
  );
};

export default FullScreenDialog;
