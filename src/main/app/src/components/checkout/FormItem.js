import React, { useState } from 'react';
import { removeFromCart, updateQuatity } from '../hoc/cart.actions';

const FormItem = ({
  id,
  itemName,
  weight,
  weightType,
  qty,
  price,
  image,
  dispatch,
  isDiscount,
  ogPrice,
}) => {
  const [itemPrice, setItemPrice] = useState(
    ((price * qty * 100) / 100).toFixed(2),
  );
  const [itemOgPrice, setItemOgPrice] = useState(
    ((ogPrice * qty * 100) / 100).toFixed(2),
  );

  const [input, setInput] = useState(qty);
  const handleRemove = e => {
    e.preventDefault();
    removeFromCart(id, dispatch);
  };
  
  const handleInput = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        return false;
    }
    setInput(e.target.value);
    if (isDiscount) {
      setItemOgPrice(
        ((ogPrice * e.target.value * 100) / 100).toFixed(2),
      );
    }
    setItemPrice(((price * e.target.value * 100) / 100).toFixed(2));
    updateQuatity(id, e.target.value, dispatch);
  };
  return (
    <div className="order-sum-item">
      <div className="order-sum-item-details">
        <div className="order-sum-item-detail-img">
          <div
            className="order-item-img"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="order-sum-item-desc">
          <div className="order-sum-item-info-wrap">
            <div className="order-sum-item-info-txt order-sum-item-title">
              {itemName}
            </div>
            <div className="order-sum-info-wrap">
              <div className="order-sum-item-atr">Weight:</div>
              <div className="order-sum-item-value">
                {`${weight} ${weightType}`}
              </div>
            </div>
            <div className="order-sum-info-wrap">
              <div className="order-sum-item-atr">Quantity:</div>
              <input
                type="number"
                className="checkout-num-input w-input"
                maxLength="256"
                name="qty"
                value={input}
                id="qty"
                required
                min={0}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="order-sum-item-remove-wrap">
            <button className="order-det-rem w-button" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
      {isDiscount ? (
        <div className="order-sum-item-price-wrap">
          <div className="order-sum-item-price-discount">${itemOgPrice}</div>
          <div className="order-sum-item-price">${itemPrice}</div>
        </div>
      ) : (
        <div className="order-sum-item-price-wrap">
          <div className="order-sum-item-price-no-disc">${itemPrice}</div>
        </div>
      )}
    </div>
  );
};
export default FormItem;
