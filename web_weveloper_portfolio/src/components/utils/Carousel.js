import React from "react";
import Slider from "react-slick";

const Carousel = (props) => {
  return (
    <Slider {...props.settings}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Slider>
  );
};

export default Carousel;
