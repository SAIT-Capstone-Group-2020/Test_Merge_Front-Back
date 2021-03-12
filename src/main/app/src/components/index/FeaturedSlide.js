import React from 'react';

const FeaturedSlide = ({ styleName, left, image }) => {
  const featureImage = (
    <div
      className="featured-item-img"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
  return (
    <div className="slide featured-slide w-slide">
      {left ? (
        <div className="featured-slide-wrap">
          <a href="/404" className={styleName}>
            <div className="featured-header-wrap">
              <h1 className="featured-header first-lang">Spaghetti</h1>
            </div>
            <div className="featured-price-wrap featured-single-price">
              <div className="featured-desc-price">$12.99</div>
            </div>
          </a>
          {featureImage}
        </div>
      ) : (
        <div className="featured-slide-wrap">
          {featureImage}
          <a href="/404" className={styleName}>
            <div className="featured-header-wrap">
              <div className="featured-header-wrap">
                <h1 className="featured-header first-lang">Spaghetti</h1>
              </div>
            </div>
            <div className="featured-price-wrap featured-two-price">
              <div className="featured-desc-price">$12.99</div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default FeaturedSlide;
