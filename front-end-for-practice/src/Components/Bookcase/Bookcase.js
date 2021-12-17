import { Typography } from '@mui/material';
import React from 'react';
import ItemShowCase from '../ItemShowcase/ItemShowCase';

const Bookcase = ({pageTitle}) => {
  return (
    <div>
      <div className="bookcase__header">
        <Typography>{pageTitle}</Typography>
        <div className="bookcase__innerContainer">
          {/* number of results */}
          {/* filterButtons */}
        </div>
      </div>
      <ItemShowCase />
    </div>
  );
};

export default Bookcase;