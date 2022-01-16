import { Box, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../context/State';
import ProductCard from '../Shared/ProductCard/ProductCard';

const SearchProduct = () => {
    const { products } = useContext(StateContext);

    const [searchName, setSearchName] = useState('');
    const [searchItem, setSearchItem] = useState([]);

    useEffect(() => {
        const result = products.filter((item) =>
            item.title.toLowerCase().includes(searchName)
        );
        setSearchItem(result);
    }, [searchName, products]);

    console.log("this is serach name", searchName);
    console.log(searchItem);
    return (
        <Container>
            <h3>Search Produt By Name:</h3>
            <TextField
                sx={{ width: '100%', m: 1 }}
                id="standard-basic"
                label="Search By Name"
                name="title"
                onChange={(e) => setSearchName(e.target.value.toLowerCase())}
                variant="standard"
            />
            <Box>
                {!searchItem.length ? (
                    <h2>No Result Found</h2>
                ) : (
                    <Grid
                        container
                        spacing={5}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {searchItem.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </Grid>
                )}
            </Box>
        </Container>
    );
};

export default SearchProduct;
