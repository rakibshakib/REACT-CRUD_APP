import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container sx={{ border: 1, background: "black" , py: 2}}>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box>
          <Link className="route-link" to="/">
            Home
          </Link>
          <Link className="route-link" to="/add-product">
            Add Product
          </Link>
          <Link className="route-link" to="/categories">
          Categories 
          </Link>
          <Link className="route-link" to="/search">
          Search Product 
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
