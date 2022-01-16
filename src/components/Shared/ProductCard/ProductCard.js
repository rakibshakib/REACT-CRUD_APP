import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../context/State";

const ProductCard = ({ item }) => {
  const {deletProduct} = useContext(StateContext)

  const navigate = useNavigate();
  const updateProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };
  const deleteProduct = (id) => {
    const isConfirm = window.confirm("are you sure want to delete this product data?");
    if(isConfirm){
      alert("Product Deleting.....");
      deletProduct(id);
    }
  };
  return (
    <Grid item xs={12} md={4} lg={4} className="food-card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18, mt: 2 }} component="h4" variant="h4">
            {item?.title}
          </Typography>
          <Typography sx={{ mt: 1.5 }} variant="body2">
            Details: {item?.description}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            price: ${item?.price}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            Category: {item?.category}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            Creation Date: {item?.CreationDate}
          </Typography>
          <Typography variant="body2">
            Last UpdateDate: {item?.updateDate || "Not Update Yet"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={()=>updateProduct(item.id)}
            size="small"
            variant="contained"
            color="success"
          >
            Update
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
