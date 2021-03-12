import React, { useState, useEffect } from 'react';
import FormItem from './FormItem';
import { BeatLoader } from 'react-spinners';
import useFetch from '../../utils/useFetch.hook';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Form = ({ cart }) => {
  const [cartItems, setCartItems] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (cartItems) {
      setLoading(false);
    }
  }, [cartItems]);
  // Get item data from cart
  let url = 'https://hha-capstone.herokuapp.com/api/customer/order?';
  cart.forEach(({ id }) => {
    url += `id=${id}&`;
  });
  useFetch(url, setCartItems);
  return (
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      className="section cc-checkout-page"
    >
      <div className="order-details-wrapper">
        <a href="/products" className="button general-button back-btn w-button">
          Continue Shopping
        </a>
        <h1 className="order-summary-main-header">Review Your Order</h1>
        <div className="order-summary-items-wrap">
          <h3 className="order-summary-header">Items in Order</h3>
          <div className="order-sum-items-flex">
            {loading ? (
              <div className="loader-container-checkout">
                <BeatLoader color="red" />
              </div>
            ) : (
              <div>
                {cartItems.map(
                  (
                    {
                      product_id,
                      discount_price,
                      image_url,
                      is_discount,
                      original_price,
                      product_name,
                      weight_value,
                      weight_type_name,
                    },
                    index,
                  ) => (
                    <FormItem
                      key={product_id}
                      id={product_id}
                      image={image_url}
                      itemName={product_name}
                      price={is_discount ? discount_price : original_price}
                      isDiscount={is_discount}
                      ogPrice={original_price}
                      qty={cart[index].quantity}
                      weight={weight_value}
                      weightType={weight_type_name}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
        <div className="order-sum-payment-wrap">
          <h3 className="order-summary-header">Payment Info</h3>
          <h6 className="checkout-input-head">Name</h6>
          <input
            type="text"
            className="checkout-input w-input"
            autoFocus="true"
            maxLength="256"
            name="name"
            data-name="name"
            placeholder="John Doe"
            id="name"
            required=""
          />
          <h6 className="checkout-input-head">Email</h6>
          <input
            type="email"
            className="checkout-input w-input"
            maxLength="256"
            name="email"
            data-name="email"
            placeholder="jdoe@gmail.com"
            id="email"
            required=""
          />
          <h6 className="checkout-input-head">Confirm Email</h6>
          <input
            type="email"
            className="checkout-input w-input"
            maxLength="256"
            name="confirmEmail"
            data-name="confirmEmail"
            placeholder="jdoe@gmail.com"
            id="confirmEmail"
            required=""
          />
          <h6 className="checkout-input-head">Phone</h6>
          <input
            type="tel"
            className="checkout-input w-input"
            maxLength="256"
            name="phone"
            data-name="phone"
            placeholder="403-123-4567"
            id="phone"
            required=""
          />
        </div>
      </div>
      <div className="order-summary-wrapper">
        <div className="order-summary-wrap order-sum">
          <h3 className="order-summary-header">Order Summary</h3>
          <div className="summary-price-container">
            <div className="summary-desc">Total before tax: </div>
            <div className="summary-price">$100.00 CAD</div>
          </div>
          <div className="summary-price-container">
            <div className="summary-desc">Calculated GST:</div>
            <div className="summary-price">$5.00 CAD</div>
          </div>
          <div className="order-summary-total-container">
            <h5 className="order-total-price">Order Total: </h5>
            <h5 className="order-total-price">$105.00 CAD</h5>
          </div>
          <input
            type="submit"
            value="Pay in Store"
            className="button general-button order-checkout-btn w-button"
          />
        </div>
      </div>
    </form>
  );
};

// Type Checking
Form.propTypes = {
  cart: PropTypes.array.isRequired,
};

// getting actual data and putting it in
// const Form = ({ cart })
const mapStateToProps = state => ({
  cart: state.hhaCart,
});

// in second param of connect place functions that are from cart.actions
export default connect(mapStateToProps, {})(Form);

