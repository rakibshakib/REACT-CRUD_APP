import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../context/State';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Categories = () => {
    const { products } = useContext(StateContext);
    const [currentCategory, setCurrentCategory] = useState('');
    const [showProduct, setShowProduct] = useState([]);

    const categoriesList = products.map((item) => item['category']);
    const categoriesArr = [];
    categoriesList.forEach((list) => {
        if (!categoriesArr.includes(list)) {
            categoriesArr.push(list);
        }
    });

    const phoneQuantity = products.filter(item => item.category === 'phone');
    const LaptopQuantity = products.filter(item => item.category === 'laptop');

    const selectedCat = (list) => {
        console.log('this list will update', list);
        setCurrentCategory(list);
    };

    useEffect(() => {
        const currentItem = products.filter(
            (item) => item.category === currentCategory
        );
        setShowProduct(currentItem);
    }, [currentCategory, products]);

    console.log(showProduct);
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 3 }}>
                <Grid item xs={3} sx={{ borderRight: 2 }}>
                    <Typography variant="h5">Categories List</Typography>
                    <Box>
                        {categoriesArr.map((item) => (
                            <li
                                className="catList"
                                onClick={() => selectedCat(item)}
                                key={item}
                            >
                                {item.toUpperCase()} &nbsp; &nbsp;
                                <span className="listQuantity">
                                    {item === 'phone' && phoneQuantity.length}
                                    {item === 'laptop' && LaptopQuantity.length}
                                </span>
                            </li>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Grid
                        container
                        spacing={5}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {showProduct.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Categories;
