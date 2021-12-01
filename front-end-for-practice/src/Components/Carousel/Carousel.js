import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import "./carousel.css";

const Carousel = ({ books, title }) => {
  let [index, setIndex] = useState(0);
  console.log("books",books)
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
    console.log(imageName)
    return file ? file : null;
  };

  return (
    <div className="carousel_Container">
      <div><Typography>{title}</Typography></div>
      <div className="carousel_Unit">
        <ArrowBackIosNewIcon className="carousel_arrow" onClick={prevImage} />
        <div className="carousel_Window">
          {books ?
            <img className="carousel_Image" src={getRightImage(books[index].image)} />
            : "loading"
          }
        </div>
        <ArrowForwardIosIcon className="carousel_arrow" onClick={nextImage} />
      </div>
    </div>
  );
};

export default Carousel;