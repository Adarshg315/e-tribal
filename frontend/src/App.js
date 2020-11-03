// import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import React from "react";
import routes from "./routes";
import CartProvider from "./context/CartProvider";
import AuthProvider from "./context/AuthProvider";
import WishProvider from "./context/WishProvider";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./context/theme";
import { GlobalStyles } from "./context/global";
import { useDarkMode } from "./userDarkMode";

const App = () => {
  const [theme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <WishProvider>
          <CartProvider>
            <SnackbarProvider maxSnack={3}>
              <AuthProvider>{routes()}</AuthProvider>
            </SnackbarProvider>
          </CartProvider>
        </WishProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
