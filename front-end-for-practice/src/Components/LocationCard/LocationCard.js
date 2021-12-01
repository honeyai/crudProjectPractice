import { Typography } from '@mui/material';
import React from 'react';
import "./locationCard.css";

const LocationCard = ({ location, address, zip, hours }) => {

  return (
    <div className="locationCard_Container">
      <div className="locationCard_Card">
        <div className="locationCard_Image" />
        <div className="locationCard_WhereAndWhen">
          <Typography> {location} </Typography>
          <Typography> {address} </Typography>
          <Typography> {zip} </Typography>
          <Typography> {hours} </Typography>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;