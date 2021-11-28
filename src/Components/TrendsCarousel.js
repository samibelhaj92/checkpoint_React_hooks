import {Carousel} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import React from "react";

function TrendsCarousel({el}) {
    return (
      <div className="MyTrendsCarousel">

<Carousel variant="dark">
  <Carousel.Item>
    <img className="d-block w-100" src= {el.posterURL} alt="slide"/>
    <Carousel.Caption>
      <h1>{el.title}</h1>
      <h2>{el.year}</h2>
      <h3><ReactStars count={5} value={el.rate} size={24} activeColor="#ffd700"/></h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
  }
  
  export default TrendsCarousel;