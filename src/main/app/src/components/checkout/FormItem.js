import React from 'react';

const FormItem = ({ id, itemName, weight, weightType, qty, price, image }) => {
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
              <div className="order-sum-item-value">{qty}</div>
            </div>
          </div>
          <div className="order-sum-item-remove-wrap">
            <a href="#" className="order-det-rem w-button">
              Remove
            </a>
            <a href="#" className="order-det-rem w-button">
              CHANGE
            </a>
          </div>
        </div>
      </div>
      <div className="order-sum-item-price-wrap">
        <div className="order-sum-item-price">${price}</div>
      </div>
    </div>
  );
};
export default FormItem;
