import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Carousel from '../Carousel/Carousel';
import "./home.css"
const Home = () => {
  //!move the request calls here so that The carousel has no logic regarding what to display, only fed what to display.
  const [bestSellers, setBestSellers] = useState();
  useEffect(() => {
    const getTitles = async () => {
      try {
        const response = await fetch('http://localhost:8080/b/list');
        const body = await response.json();
        setBestSellers(body.filter((b) => b.rating > 3 ));
      } catch (error) {
        console.error(error.message);
      }
    }
    getTitles();
  }, []);

  return (
    <div className="home_Container">
      <div className="home_BestSellersContainer">
        <Typography>Best Sellers</Typography>
        <Carousel books={bestSellers}/>
      </div>
    </div>
  );
};

export default Home;