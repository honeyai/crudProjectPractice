// import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Carousel from '../Carousel/Carousel';
import "./home.css"
const Home = () => {

  const [bestSellers, setBestSellers] = useState();
  const [bestNonFic, setBestNonFic] = useState();
  const [featured, setFeatured] = useState();
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/b/list');
        const body = await response.json();
        setBestSellers(body.filter((b) => b.rating > 4 ));
        setBestNonFic(body.filter((b) => b.rating > 3 && b.genre === "nonfiction"));
        setFeatured(body.filter((b) => b.rating === 5));
      } catch (error) {
        console.error(error.message);
      }
    }
    getBooks();
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