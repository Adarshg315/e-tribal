import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartDialog from "../../screens/CartDialog";
import TopnavStyles, { useStylesBootstrap } from "./TopNavStyles";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AuthContext from "../../context/AuthContext";
import WishDialog from "../../screens/WishDialog";
import WishContext from "../../context/WishContext";
import Toggle from "../../Toggle";
import { useDarkMode } from "../../userDarkMode";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const styleBadgeStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const TopNav = () => {
  const classes = TopnavStyles();
  const avatarClasses = styleBadgeStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { cart } = useContext(CartContext);
  const { wishCart } = useContext(WishContext);
  const { loggedIn, setLogin } = useContext(AuthContext);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = useState(false);
  const [openWish, setWishOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWishClickOpen = () => {
    setWishOpen(true);
  };

  const handleWishClose = () => {
    setWishOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logoutUser = () => {
    localStorage.removeItem("loggedIn");
    setLogin(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
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

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
    </Menu>
  );

  let productCount = 0;
  cart.map((product) => (productCount += product.count));

  let wishProductCount = 0;
  wishCart.map((wishProduct) => (wishProductCount += wishProduct.count));

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <BootstrapTooltip title="Tribal Cart" placement="bottom">
            <Typography className={classes.title} variant="h6" noWrap>
              Srappy
            </Typography>
          </BootstrapTooltip>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* Wish List */}
            <BootstrapTooltip title="Wish-list" placement="bottom">
              <IconButton
                aria-label="show Wishlist products"
                color="inherit"
                onClick={handleWishClickOpen}
              >
                <Badge badgeContent={wishProductCount} color="secondary">
                  <FavoriteBorder />
                </Badge>
              </IconButton>
            </BootstrapTooltip>

            <WishDialog openWish={openWish} handleWishClose={handleWishClose} />

            {/* Cart */}
            <BootstrapTooltip title="View Cart" placement="bottom">
              <IconButton
                aria-label="show new products"
                color="inherit"
                onClick={handleClickOpen}
              >
                <Badge badgeContent={productCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </BootstrapTooltip>

            <CartDialog open={open} handleClose={handleClose} />

            {/* Avatar code */}
            <BootstrapTooltip title="User" placement="bottom">
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant={loggedIn ? "dot" : "standard"}
                classes={avatarClasses}
              >
                <Avatar
                  alt="Avatar"
                  // src="https://media-exp1.licdn.com/dms/image/C5103AQG-Rx4p5D2C8A/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=WxMXbindgaLSKKAWKvbYvfDFLkKMASORdJPa2DG3qWI"
                />
              </StyledBadge>
            </BootstrapTooltip>

            <BootstrapTooltip title="SignOut" placement="bottom">
              <IconButton
                aria-label="show new products"
                color="inherit"
                onClick={logoutUser}
              >
                <ExitToAppIcon />
              </IconButton>
            </BootstrapTooltip>

            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default TopNav;
