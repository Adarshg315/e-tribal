import React, { useState } from "react";
import WishContext from "./WishContext";

const WishProvider = ({ children }) => {
  const [wishCart, setWishCart] = useState([]);

  return (
    <WishContext.Provider value={{ wishCart: wishCart.slice(), setWishCart }}>
      {children}
    </WishContext.Provider>
  );
};

export default WishProvider;
