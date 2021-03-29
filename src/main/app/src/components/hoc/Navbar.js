import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../pages/Cart.page';
import { Store } from '../hoc/Store';

const Navbar = () => {
  // ! Gain access to Context/Reducer
  const { state, dispatch } = useContext(Store);

  const [cartOpen, setCartOpen] = useState();
  
  const handleCartButton = e => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  }
   
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="nav w-nav"
    >
      <div className="nav-items">
        <a
          href="/#"
          aria-current="page"
          className="w-nav-brand w--current"
        >
          <div className="nav-logo"></div>
        </a>
        <div className="nav-wrap">
          <nav role="navigation" className="nav-items w-nav-menu">
            <a
              href="/#"
              aria-current="page"
              className="nav-item w-nav-link w--current"
            >
              Home
            </a>
             <Link to={{ pathname: '/products', state: { category: 'meat', sort: 'asc'} }} className="nav-item w-nav-link">
              Products
            </Link>
            <a href="/#/about" className="nav-item w-nav-link">
              About
            </a>
          </nav>
          <div className="w-commerce-commercecartwrapper cart">
            <button className="w-commerce-commercecartopenlink button cc-cart nav-btn w-inline-block" onClick={handleCartButton}>
              <div className="w-inline-block">Cart</div>
              <div className="w-commerce-commercecartopenlinkcount card-quantity">
                {state.length}
              </div>
            </button>
            {!cartOpen ? null : <Cart handleCartButton={handleCartButton} />}
          </div>
          <div className="menu-button w-nav-button">
            <img
              src="https://res.cloudinary.com/hsse18xji/image/upload/v1612153498/HHA/images/menu-icon_1menu-icon_nylya0.png"
              width="22"
              alt=""
              className="menu-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
