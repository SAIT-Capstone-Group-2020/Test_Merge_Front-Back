import React from 'react';

const Navbar = () => {
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
          href="/"
          aria-current="page"
          className="w-nav-brand w--current"
        >
          <div className="nav-logo"></div>
        </a>
        <div className="nav-wrap">
          <nav role="navigation" className="nav-items w-nav-menu">
            <a
              href="/"
              aria-current="page"
              className="nav-item w-nav-link w--current"
            >
              Home
            </a>
            <a href="/products" className="nav-item w-nav-link">
              Products
            </a>
            <a href="/about" className="nav-item w-nav-link">
              About
            </a>
          </nav>
          <div className="w-commerce-commercecartwrapper cart">
            <button className="w-commerce-commercecartopenlink button cc-cart nav-btn w-inline-block">
              <div className="w-inline-block">Cart</div>
              <div className="w-commerce-commercecartopenlinkcount card-quantity">
                0
              </div>
            </button>
            {/* <div
              // change this with redux later
              //   style="display:none"
              className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper"
            >
              <div className="w-commerce-commercecartcontainer cart-container">
                <div className="w-commerce-commercecartheader cart-header">
                  <h4 className="head-jumbo-tiny">your cart</h4>
                  <a
                    href="#"
                    className="w-commerce-commercecartcloselink close-button w-inline-block"
                  >
                    <img src="images/close-icon.svg" alt="" className="icon" />
                  </a>
                </div>
                <div className="w-commerce-commercecartformwrapper cart-form-wrapper">
                  <form
                    // change this with redux later
                    // style="display:none"
                    className="w-commerce-commercecartform cart-default-state"
                  >
                    <div className="w-commerce-commercecartlist cart-list">
                      <div className="w-commerce-commercecartemptystate cart-empty-state">
                        <div className="paragraph-light">No items found.</div>
                      </div>
                    </div>
                    <div className="w-commerce-commercecartfooter cart-footer">
                      <div className="w-commerce-commercecartlineitem cart-item-total">
                        <div>Subtotal</div>
                        <div className="w-commerce-commercecartordervalue paragraph-bigger cart-item-total-price"></div>
                      </div>
                      <div className="checkout-actions">
                        <a
                          href="#"
                          className="w-commerce-commercecartcheckoutbutton button nav-cart-btn"
                        >
                          Continue to Checkout
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
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
