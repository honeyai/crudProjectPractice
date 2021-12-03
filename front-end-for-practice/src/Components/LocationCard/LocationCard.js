import { Typography } from '@mui/material';
import React from 'react';
import "./locationCard.css";

const LocationCard = ({ location, address, zip, hours }) => {

  return (
    <div className="locationCard_Container">
      <div className="locationCard_Card">
        <img  src="https://images.pexels.com/photos/626986/pexels-photo-626986.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="locationCard_Image" />
        <div className="locationCard_WhereAndWhen">
          <Typography style={{'fontWeight': 'bold'}}> {location} </Typography>
          <div className="locationCard_divider"/>
          <Typography> {address} </Typography>
          <Typography> {zip} </Typography>
          <Typography> {hours} </Typography>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;