import React from 'react';
import FeaturedSlider from './FeaturedSlider';
import FeaturedSlide from './FeaturedSlide';

const Featured = () => {
  return (
    <div className="featured-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header featured-h1">
            Featured
            <br />
            <span className="main-page-header-span">Products</span>
          </h1>
        </div>
      </div>
      <FeaturedSlider styleName="image-slider featured-wrapper w-slider">
        <div className="slider-wrap featured-wrap w-slider-mask">
          <FeaturedSlide
            styleName="featured-desc-wrap featured-no-desc w-inline-block"
            left={true}
            image="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
          />

          <FeaturedSlide
            styleName="featured-desc-wrap featured-desc-alt featured-no-desc w-inline-block"
            left={false}
            image="https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          />

          <FeaturedSlide
            styleName="featured-desc-wrap featured-no-desc w-inline-block"
            left={true}
            image="https://images.unsplash.com/photo-1575506142613-499224781394?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fHNwYWdoZXR0aXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />

          <FeaturedSlide
            styleName="featured-desc-wrap featured-desc-alt featured-no-desc w-inline-block"
            left={false}
            image="https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
          />
        </div>
        <div className="left-arrow featured-arrow w-slider-arrow-left">
          <div className="w-icon-slider-left"></div>
        </div>
        <div className="right-arrow featured-arrow w-slider-arrow-right">
          <div className="w-icon-slider-right"></div>
        </div>
        <div className="slide-nav featured-nav w-slider-nav w-shadow w-round"></div>
      </FeaturedSlider>
    </div>
  );
};

export default Featured;
