import React from 'react';

const FeaturedSlider = ({ styleName, children }) => {
  return (
    <div
      data-delay="5000"
      data-animation="slide"
      data-autoplay="1"
      data-hide-arrows="1"
      data-autoplay-limit="120000"
      data-duration="400"
      data-infinite="1"
      className={styleName}
    >
      {children}
    </div>
  );
};

export default FeaturedSlider;
