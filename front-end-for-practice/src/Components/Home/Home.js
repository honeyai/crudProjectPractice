import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Carousel from '../Carousel/Carousel';
import "./home.css"
const Home = () => {

  const [bestSellers, setBestSellers] = useState();
  const [bestNonFic, setBestNonFic] = useState();
  const [allImages, setAllImages] = useState();

  let toReturn = [];

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/b/list');
        const body = await response.json();
        console.log("body", body)
        setBestSellers(body.filter((b) => b.rating > 3 ));
        setBestNonFic(body.filter((b) => b.rating > 3 && b.genre === "non-fiction"));
        setAllImages(body.map((i) => {
          toReturn.push(i.image);
          return toReturn;
        }));
      } catch (error) {
        console.error(error.message);
      }
    }
    getBooks();
  }, []);

  return (
    <div className="home_Container">
      <div className="home_BestSellersContainer">
        <Typography>Best Sellers</Typography>
        <Carousel books={bestSellers} images={allImages}/>
      </div>
      <div className="home_BestSellersContainer">
        <Typography>Best Non-Fiction</Typography>
        <Carousel books={bestNonFic}/>
      </div>
    </div>
  );
};

export default Home;