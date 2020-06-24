import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
// import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
// import clsx from "clsx";
import { useSnackbar } from "notistack";
import React from "react";
import useStyles, { StyledBadge } from "./ProductCardStyles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const ProductCard = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { item, addItem, removeItem, removeWishItem } = props;

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const BootstrapTooltip = (props) => {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  };

  const handleAddItem = () => {
    addItem(item, "cart");
    enqueueSnackbar(item.title + " Added to cart", {
      variant: "info",
    });
  };

  const handleWishAddItem = () => {
    addItem(item, "wishList");
    enqueueSnackbar(item.title + " Added to Wishlist", {
      variant: "info",
    });
  };

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader
        action={
          <>
            {/* cart */}
            {removeItem ? (
              <BootstrapTooltip title="Remove from Cart" placement="bottom">
                <IconButton
                  onClick={() => removeItem(item)}
                  color="primary"
                  aria-label="remove from shopping cart"
                >
                  <StyledBadge badgeContent={item.count} color="secondary">
                    <RemoveShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </BootstrapTooltip>
            ) : (
              <BootstrapTooltip title="Add to Cart" placement="bottom">
                <IconButton
                  onClick={handleAddItem}
                  color="primary"
                  aria-label="Add to Cart"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </BootstrapTooltip>
            )}

            {removeWishItem ? (
              <BootstrapTooltip title="Remove from Wishlist" placement="top">
                <IconButton
                  onClick={() => removeWishItem(item)}
                  color="primary"
                  aria-label="Remove Wish"
                >
                  <StyledBadge color="secondary">
                    <FavoriteIcon />
                  </StyledBadge>
                </IconButton>
              </BootstrapTooltip>
            ) : (
              <BootstrapTooltip title="Add to Wish" placement="top">
                <IconButton
                  onClick={handleWishAddItem}
                  color="primary"
                  aria-label="add to Wish"
                >
                  <FavoriteBorder />
                </IconButton>
              </BootstrapTooltip>
            )}
          </>
        }
        title={"Title:" + item.title}
      />
      <CardMedia
        className={classes.media}
        image="https://previews.123rf.com/images/yulianas/yulianas1802/yulianas180200009/96354530-warli-painting-hand-drawn-traditional-the-ancient-tribal-art-india-in-the-style-of-indian-kitsch-mat.jpg"
        title="Paella dish"
      />
      <CardContent>
        <BootstrapTooltip title="Product Description" placement="bottom">
          <Typography variant="body2" color="textSecondary" component="p">
            {"Description :" + item.description}
            {"Price: ₹" + item.price}
          </Typography>
        </BootstrapTooltip>
      </CardContent>

      <CardActions disableSpacing></CardActions>
    </Card>
  );
};
export default ProductCard;
