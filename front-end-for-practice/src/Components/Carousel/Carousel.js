import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./carousel.css";

const Carousel = ({books}) => {
  let [index, setIndex] = useState(0);

  const nextImage = () => {
    if(books.length - 1 <= index) {
      setIndex(0);
    } else {
      setIndex(++index);
    }
  }

  const prevImage = () => {
    if(index < 1) {
      setIndex(books.length - 1);
    } else {
      setIndex(--index);
    }
  }

  return (
    <div className="carousel_Container">
      <ArrowBackIosNewIcon className="" onClick={prevImage}/>
      <div className="carousel_Window">
        {books? books[index].title : "loading"}
      </div>
      <ArrowForwardIosIcon className="" onClick={nextImage}/>
    </div>
  );
};

export default Carousel;