import { Typography } from '@mui/material';
import React from 'react';
import "./itemShowCase.css";

const ItemShowCase = ({image, title, author, title, rating, price}) => {
  return (
    <div className="itemShowcase__container">
      <div className="itemShowcase__innerContainer">
        <img src={image} />
        <div className="itemShowcase__infoContainer">
          <Typography>{title}</Typography>
          <span>by <Typography>{author}</Typography></span>
          <Typography>{rating}</Typography>
          <Typography>{price}</Typography>
        </div>
        {/*Availability*/}
      </div>
      <Button variant="contained">
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemShowCase;