import React, { useContext } from "react";
import { Container, Anchor } from "atomize";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <>
      <Container d="flex" flexDir="row" p="2rem" justify="space-between">
        <Link to="/">
          <img src="/apple-touch-icon.png" alt="logo" width="50px" />
        </Link>
        <img src="/logo.svg" alt="logo" width="30%" />
        <Anchor onClick={() => openCart()}>
          <img src="/shopping-bag.png" alt="cart" width="50px" />
        </Anchor>
      </Container>
    </>
  );
};

export default Navbar;
