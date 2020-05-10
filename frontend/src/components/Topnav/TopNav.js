import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartDialog from '../../screens/CartDialog';
import useStylesBootstrap from '../Topnav/TopNavStyles';
import useStyles from './TopNavStyles.js';

const TopNav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { cart } = useContext(CartContext);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const BootstrapTooltip = (props) => {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  let productCount = 0;
  cart.map((product) => (productCount += product.count));

  return (
    <div className={classes.grow}>
      <AppBar position='fixed'>
        <Toolbar>
          {/* <TemporaryDrawer /> */}
          <BootstrapTooltip title='Tribal Cart' placement='bottom'>
            <Typography className={classes.title} variant='h6' noWrap>
              TC
            </Typography>
          </BootstrapTooltip>

          {/* <BootstrapTooltip title='Search Tribal Products!' placement='bottom'>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search Product'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </BootstrapTooltip> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* <IconB utton aria-label="change language" color="inherit">
              <Badge color="secondary">
                <LanguageIcon />
              </Badge>
            </IconButton> */}
            <BootstrapTooltip title='View Cart' placement='bottom'>
              <IconButton
                aria-label='show new products'
                color='inherit'
                onClick={handleClickOpen}
              >
                <Badge badgeContent={productCount} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </BootstrapTooltip>
            <CartDialog open={open} handleClose={handleClose} />
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              // onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircleIcon />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <BootstrapTooltip title='View Cart' placement='bottom'>
              <IconButton
                aria-label='show new products'
                color='inherit'
                onClick={handleClickOpen}
              >
                <Badge badgeContent={productCount} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </BootstrapTooltip>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              // onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default TopNav;
