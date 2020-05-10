import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import useStyles, { StyledBadge } from './ProductCardStyles';

const ProductCard = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);
  const { item, addItem, removeItem } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    addItem(item);
    enqueueSnackbar(item.title + ' Added Sucessfully', {
      variant: 'info',
    });
  };

  return (
    <Card className={classes.root} raised='True'>
      <CardHeader
        action={
          <>
            {removeItem ? (
              <BootstrapTooltip title='Remove from Cart' placement='bottom'>
                <IconButton
                  onClick={() => removeItem(item)}
                  color='primary'
                  aria-label='remove from shopping cart'
                >
                  <StyledBadge badgeContent={item.count} color='secondary'>
                    <RemoveShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </BootstrapTooltip>
            ) : (
              <BootstrapTooltip title='Add to Cart' placement='bottom'>
                <IconButton
                  onClick={handleAddItem}
                  color='primary'
                  aria-label='add to shopping cart'
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </BootstrapTooltip>
            )}
          </>
        }
        title={item.title}
      />
      <CardMedia
        className={classes.media}
        image='https://previews.123rf.com/images/yulianas/yulianas1802/yulianas180200009/96354530-warli-painting-hand-drawn-traditional-the-ancient-tribal-art-india-in-the-style-of-indian-kitsch-mat.jpg'
        title='Paella dish'
      />
      <CardContent>
        <BootstrapTooltip title='Product Description' placement='bottom'>
          <Typography variant='body2' color='textSecondary' component='p'>
            {item.description}
          </Typography>
        </BootstrapTooltip>
      </CardContent>

      <CardActions disableSpacing>
        <BootstrapTooltip title='Favorite' placement='top'>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </BootstrapTooltip>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        ></IconButton>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
