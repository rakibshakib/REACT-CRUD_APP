import { Container, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { StateContext } from '../../context/State';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Home = () => {
    const { products } = useContext(StateContext);
    return (
        <Container>
            
                <Typography
                    variant="h5"
                    sx={{ textAlign: 'center', mt: 2, fontWeight: '700' }}
                    gutterBottom
                >
                    Total Products: {products.length}
                </Typography>
        
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="center"
            >
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
