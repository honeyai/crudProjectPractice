// import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Carousel from '../Carousel/Carousel';
import "./home.css";

const Home = () => {

  const [bestSellers, setBestSellers] = useState();
  const [bestNonFic, setBestNonFic] = useState();
  const [featured, setFeatured] = useState();

  useEffect(() => {

    const getBest = async () => {
      try {
        const response = await fetch('http://localhost:8080/b/listAll/bestSellers');
        const body = await response.json();
        setBestSellers(body);
      } catch (error) {
        console.error(error.message);
      }
    }

    const getNonficBest = async () => {
      try {
        const response = await fetch('http://localhost:8080/b/listAll/bestSellers/nonfiction');
        const body = await response.json();
        setBestNonFic(body);
      } catch (error) {
        console.error(error.message);
      }
    }

    const getFeatured = async () => {
      try {
        const response = await fetch("http://localhost:8080/b/listAll/4.5");
        const body = await response.json();
        setFeatured(body);
      } catch (error) {
        console.log(error.message);
      }
    }

    getBest();
    getNonficBest();
    getFeatured();
    console.log("bestsellers", bestSellers);
    console.log("bestnonfic", bestNonFic);
    console.log("featured", featured);
  }, []);

  return (
    <div className="home_Container">
      <div className="home_BestSellersContainer">
        <Carousel books={featured} />
      </div>
      <div className="home_BestSellersContainer">
        <Carousel title="Best Sellers" books={bestSellers} />
      </div>
      <div className="home_BestSellersContainer">
        <Carousel title="Best Selling Non-fiction" books={bestNonFic}/>
      </div>
    </div>
  );
};

export default Home;