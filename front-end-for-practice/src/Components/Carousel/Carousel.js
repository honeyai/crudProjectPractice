import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./carousel.css";

const Carousel = ({ books, allImages }) => {
  let [index, setIndex] = useState(0);

  const importImages = (r) => r.keys().map(r);
  let images = importImages(require.context(`../Assets/Images`, false, /\.(png|jpe?g|svg)$/i));
  
  console.log("images", images)

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
    console.log(imageName);
    images.map((i) => console.log(i))
    file = images.find(
      (i) =>
        i.split("/")
          .pop()
          .replace(/\.[^/.]+$/, "")
          .replace(/\.[^/.]+$/, "") === imageName
    );
    ;console.log(file);
    return file ? file : null;
  };

  return (
    <div className="carousel_Container">
      <ArrowBackIosNewIcon className="" onClick={prevImage} />
      <div className="carousel_Window">
        {books ?
          <img className="carousel_Image" src={getRightImage(books[index].image)}/>
          : "loading"
        }
      </div>
      <ArrowForwardIosIcon className="" onClick={nextImage} />
    </div>
  );
};

export default Carousel;