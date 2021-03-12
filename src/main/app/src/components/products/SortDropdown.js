/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SortDropdown = () => {
  return (
    <div className="product-list-filter-wrap">
        <div className="product-list-filter w-clearfix">
          <div data-hover="" data-delay="0" className="product-list-filter-dropdown w-dropdown">
            <div className="product-list-filter-toggle w-dropdown-toggle">
              <div className="w-icon-dropdown-toggle"></div>
              <div className="product-list-filter-name">Sort by price: low to high</div>
            </div>
            <nav className="product-filter-dropdown-list w-dropdown-list">
              <a href="#" className="product-list-filter-option w-dropdown-link">Sort by latest</a>
              <a href="#" className="product-list-filter-option w-dropdown-link">Sort by price: low to high</a>
              <a href="#" className="product-list-filter-option w-dropdown-link">Sort by price: high to low</a>
            </nav>
          </div>
        </div>
      </div>
  );
};

SortDropdown.propTypes = {};

export default SortDropdown;