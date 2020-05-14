import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import React from "react";
import routes from "./routes";
import CartProvider from "./context/CartProvider";
import AuthProvider from "./context/AuthProvider";
import WishProvider from "./context/WishProvider";

const App = () => {
  return (
    <>
      <WishProvider>
        <CartProvider>
          <SnackbarProvider maxSnack={3}>
            <AuthProvider>{routes()}</AuthProvider>
          </SnackbarProvider>
        </CartProvider>
      </WishProvider>
    </>
  );
};

export default App;
