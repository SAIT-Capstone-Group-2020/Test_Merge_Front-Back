import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import FormItem from './FormItem';
import { BeatLoader } from 'react-spinners';
import Alert from './Alert';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

// ! Import for Context/reducer
import { Store } from '../hoc/Store';
import { useGetCart, addToCart, saveLocal } from '../hoc/cart.actions';

const Form = () => {
  // ! Gain access to Context/Reducer
  const { state, dispatch } = useContext(Store);

  const [errorMsg, setErrorMsg] = useState('');
  const [orderSummary, setOrderSummary] = useState({});
  const [inputs, setInputs] = useState({});
  const [cartItems, setCartItems] = useState();
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Pay in Store");
  const submitBtn = useRef();

  useEffect(() => {
    if (cartItems) {
      if (state.length === cartItems.length && state.length !== 0) {
        let total = 0;
        state.forEach((item, index) => {
          if (cartItems[index].is_discount) {
            total += cartItems[index].discount_price * item.quantity;
          } else {
            total += cartItems[index].original_price * item.quantity;
          }
        });
        const gst = total * 0.05;
        const finalTotal = total + gst;
        setOrderSummary({
          total: ((total * 100) / 100).toFixed(2),
          gst: ((gst * 100) / 100).toFixed(2),
          finalTotal: ((finalTotal * 100) / 100).toFixed(2),
        });
      } else if (state.length === 0) {
        setOrderSummary({
          total: 0.0,
          gst: 0.0,
          finalTotal: 0.0,
        });
      }

      setLoading(false);
    }
    window.addEventListener(
      'keydown',
      e => {
        if (
          e.keyIdentifier === 'U+000A' ||
          e.keyIdentifier === 'Enter' ||
          e.keyCode === 13
        ) {
          if (
            e.target.nodeName === 'INPUT' &&
            (e.target.type === 'text' ||
              e.target.type === 'email' ||
              e.target.type === 'tel')
          ) {
            e.preventDefault();
            return false;
          }
        }
      },
      true,
    );
  }, [cartItems, state]);
  // Get item data from cart
  let url = 'https://hha-capstone.herokuapp.com/api/customer/order?';
  state.forEach(({ id }) => {
    url += `id=${id}&`;
  });
  // ! Grabs cart item info from API of items in state
  useGetCart(state, url, setCartItems);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let hasError = false;
    const { name, email, confirmEmail, phone } = inputs;
    if (!/^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(name)) {
      setErrorMsg('Error: Please Enter Your Full Name');
      hasError = true;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase(),
      )
    ) {
      setErrorMsg('Error: Please Enter A Valid Email');
      hasError = true;
    } else if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
      setErrorMsg('Error: Emails Do Not Match');
      hasError = true;
    } else if (!/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(phone)) {
      setErrorMsg('Error: Phone Number Format (403-123-4567)');
      hasError = true;
    } else if (state.length === 0) {
      setErrorMsg('Error: Add Items to Order');
      hasError = true;
    } else {
      hasError = false;
    }

    if (hasError) {
      window.scrollTo(0, 0);
    } else {
    setButtonText("Processing...");
      submitBtn.current.setAttribute("disabled", "disabled");
      submitForm({
        name,
        email: email.toLowerCase(),
        confirmEmail: confirmEmail.toLowerCase(),
        phone,
      });
    }
  };

  const submitForm = ({ name, email, confirmEmail, phone }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      name,
      email,
      confirmEmail,
      phone,
      orderItem: state,
    });

    axios
      .post(
        `https://hha-capstone.herokuapp.com/api/customer/order`,
        body,
        config,
      )
      .then(res => {
        saveLocal({
          hhaSummary: {
            cartItems: [...cartItems],
            cart: [...state],
            inputs: { ...inputs, date: moment().format('L') },
            orderSummary: { ...orderSummary },
          },
        });
        setIsSuccess(true);
      })
      .catch(err => {
        setErrorMsg('Error: Pay In Store Error. Please try again later!');
      });
  };
  if (isSuccess) return <Redirect to="/checkout/summary" />;

  return (
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      className="section cc-checkout-page"
      onSubmit={handleSubmit}
    >
      {errorMsg.length > 0 ? <Alert msg={errorMsg} /> : null}
      <div className="order-details-wrapper">
        <a href="/#/products" className="button general-button back-btn w-button">
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
                {state.length === cartItems.length
                  ? cartItems.map(
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
                          qty={state[index].quantity}
                          weight={weight_value}
                          weightType={weight_type_name}
                          dispatch={dispatch}
                        />
                      ),
                    )
                  : null}
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
            maxLength="256"
            name="name"
            data-name="name"
            placeholder="John Doe"
            id="name"
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="order-summary-wrapper">
        <div className="order-summary-wrap order-sum">
          <h3 className="order-summary-header">Order Summary</h3>
          <div className="summary-price-container">
            <div className="summary-desc">Total before tax: </div>
            <div className="summary-price">${orderSummary.total} CAD</div>
          </div>
          <div className="summary-price-container">
            <div className="summary-desc">Calculated GST:</div>
            <div className="summary-price">${orderSummary.gst} CAD</div>
          </div>
          <div className="order-summary-total-container">
            <h5 className="order-total-price">Order Total: </h5>
            <h5 className="order-total-price">
              ${orderSummary.finalTotal} CAD
            </h5>
          </div>
          <input
            type="submit"
            value={buttonText}
            className="button general-button order-checkout-btn w-button"
            ref={submitBtn}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
