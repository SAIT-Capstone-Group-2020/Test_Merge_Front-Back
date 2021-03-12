/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const CategorySidebar = () => {
  return (
    <div className="store-heading-categories-wrap">
      <div className="category-link-list-wrapper">
        <div className="category-link-list-wrap cc-category-list">
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="/products" aria-current="page" className="category-link w--current">All Products</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">fruits &amp; vegetables</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">meat</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">seafood</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">dairy &amp; frozen</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">snacks</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">food essentials</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
          <div className="category-link-wrapper">
            <a href="#" className="category-link">beauty &amp; household</a>
          </div>
          <div className="divider cc-product-category-divider"></div>
        </div>
      </div>
    </div>
  );
};

CategorySidebar.propTypes = {};

export default CategorySidebar;