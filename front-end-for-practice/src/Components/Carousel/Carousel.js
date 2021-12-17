import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import "./carousel.css";

const Carousel = ({ books, title }) => {
  let [index, setIndex] = useState(0);
  const importImages = (r) => r.keys().map(r);
  let images = importImages(require.context(`../Assets/Images`, false, /\.(png|jpe?g|svg)$/i));

  const nextImage = () => {
    if (books.length - 1 <= index) {
      setIndex(0);
    } else {
      setIndex(++index);
    }
  }

  const prevImage = () => {
    if (index < 1) {
      setIndex(books.length - 1);
    } else {
      setIndex(--index);
    }
  }

  let file;
  const getRightImage = (imageName) => {
    file = images.find(
      (i) =>
        i.split("/")
          .pop()
          .replace(/\.[^/.]+$/, "")
          .replace(/\.[^/.]+$/, "") === imageName
    );
    return file ? file : null;
  };

  return (
    <div className="carousel_Container">
      <div><Typography>{title}</Typography></div>
      <div className="carousel_Unit">
        <div className="carousel_Icon" onClick={prevImage}>
          <ArrowBackIosNewIcon className="carousel_arrow" />
        </div>
        <div className="carousel_Window">
          {books ?
            <img className="carousel_Image" src={getRightImage(books[index].image)} />
            : "loading"
          }
        </div>
        <div className="carousel_Icon" onClick={nextImage}>
          <ArrowForwardIosIcon className="carousel_arrow" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;