import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../context/State';

const AddProduct = () => {
    const [productDetails, setProductDetails] = useState({});
    const { products, addProducts } = useContext(StateContext);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        const ProductData = { ...productDetails };
        ProductData[name] = value;
        ProductData["id"] = 101 + products.length;
        ProductData["category"] = value.toLowerCase();
        ProductData["CreationDate"] =  new Date().toLocaleDateString()
        setProductDetails(ProductData);
    };
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        addProducts(productDetails)
        navigate(`/`);

    };
    return (
        <Container>
            <Typography
                variant="h5"
                sx={{ textAlign: 'center', mt: 5 }}
                gutterBottom
            >
                Add Products
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 5,
                    border: 1,
                }}
            >
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Product Title"
                        name="title"
                        onChange={handleOnChange}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Product Descriptions"
                        type="text"
                        name="description"
                        onChange={handleOnChange}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Product Price"
                        type="text"
                        name="price"
                        onChange={handleOnChange}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Product Category"
                        type="text"
                        name="category"
                        onChange={handleOnChange}
                        variant="standard"
                    />

                    <Button
                        sx={{ width: '100%', m: 1 }}
                        type="submit"
                        variant="contained"
                        color="success"
                    >
                        Add Products
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddProduct;
