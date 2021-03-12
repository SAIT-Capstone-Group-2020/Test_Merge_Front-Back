import React from 'react';

const WeeklySale = () => {
  return (
    <div className="weekly-sale-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header featured-h1">
            Weekly
            <br />
            <span className="main-page-header-span">Sale</span>
          </h1>
        </div>
      </div>
      <div className="weekly-sale-img" style={{"backgroundImage": `url(${"https://res.cloudinary.com/hsse18xji/image/upload/v1613944107/HHA/images/Screen_Shot_2021-01-24_at_1.27.14_PM_dbircl.png"})`}}></div>
    </div>
  );
};

export default WeeklySale;
