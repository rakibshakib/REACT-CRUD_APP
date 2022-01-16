import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StateContext } from "../../context/State";

const EditProduct = () => {
  const { products, updateProduct } = useContext(StateContext);
  const paramsId = useParams();
  const navigate = useNavigate();

  const [willUpdate, setWillUpdate] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const willUpdateProduct = products.find(
      (item) => item.id === parseInt(paramsId.id)
    );
    setWillUpdate(willUpdateProduct);
  }, [paramsId.id, products]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      description,
      price,
      category,
      id: parseInt(paramsId.id),
      CreationDate: willUpdate?.CreationDate,
      updateDate: new Date().toLocaleDateString(),
    };
    updateProduct(updatedProduct);
    navigate(`/`);
  };

  return (
    <Container>
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }} gutterBottom>
        Update Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          border: 1,
        }}
      >
        <form onSubmit={handleLoginSubmit}>
          <TextField
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            name="title"
            type="text"
            label={`Title: ${willUpdate?.title}`}
            onChange={(e) => setTitle(e.target.value)}
            variant="standard"
          />
          <TextField
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label={`Description: ${willUpdate?.description}`}
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            variant="standard"
          />
          <TextField
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label={`Price: ${willUpdate?.price}`}
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            variant="standard"
          />
          <TextField
            sx={{ width: "100%", m: 1 }}
            id="standard-basic"
            label={`category name: ${willUpdate?.category}`}
            type="text"
            name="category"
            onChange={(e) => setCategory(e.target.value.toLowerCase())}
            variant="standard"
          />
          <Button
            sx={{ m: 1 }}
            type="submit"
            variant="contained"
            color="success"
          >
            Update
          </Button>
          <Link className="route-link" to="/">
            <Button
              sx={{ m: 1, textDecoration: "none" }}
              variant="contained"
              color="warning"
            >
              Cancel
            </Button>
          </Link>
        </form>
      </Box>
    </Container>
  );
};

export default EditProduct;
