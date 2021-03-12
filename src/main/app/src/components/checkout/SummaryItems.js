import React from 'react';

const SummaryItems = () => {
  return (
    <div className="order-summary-items-wrap">
      <h3 className="order-summary-header">Items in Order</h3>
      <div className="order-sum-items-flex">
        <div className="order-sum-item">
          <div className="order-sum-item-details">
            <div className="order-sum-item-detail-img">
              <div className="order-item-img"></div>
            </div>
            <div className="order-sum-item-desc">
              <div className="order-sum-item-info-wrap">
                <div className="order-sum-item-info-txt order-sum-item-title">
                  Spaghetti
                </div>
                <div className="order-sum-info-wrap">
                  <div className="order-sum-item-atr">Weight:</div>
                  <div className="order-sum-item-value">40g</div>
                </div>
                <div className="order-sum-info-wrap">
                  <div className="order-sum-item-atr">Quantity:</div>
                  <div className="order-sum-item-value">1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-sum-item-price-wrap">
            <div className="order-sum-item-price">$25.00</div>
          </div>
        </div>
        <div className="order-sum-item">
          <div className="order-sum-item-details">
            <div className="order-sum-item-detail-img">
              <div className="order-item-img"></div>
            </div>
            <div className="order-sum-item-desc">
              <div className="order-sum-item-info-wrap">
                <div className="order-sum-item-info-txt order-sum-item-title">
                  Spaghetti
                </div>
                <div className="order-sum-info-wrap">
                  <div className="order-sum-item-atr">Weight:</div>
                  <div className="order-sum-item-value">40g</div>
                </div>
                <div className="order-sum-info-wrap">
                  <div className="order-sum-item-atr">Quantity:</div>
                  <div className="order-sum-item-value">1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-sum-item-price-wrap">
            <div className="order-sum-item-price">$25.00</div>
          </div>
        </div>
        <div className="order-sum-item">
          <div className="order-sum-item-details">
            <div className="order-sum-item-detail-img">
              <div className="order-item-img"></div>
            </div>
            <div className="order-sum-item-desc">
              <div className="order-sum-item-info-wrap">
                <div className="order-sum-item-info-txt order-sum-item-title">
                  Spaghetti
                </div>
                <div className="order-sum-info-wrap">
                  <div className="order-sum-item-atr">Weight:</div>
                  <div className="order-sum-item-value">40g</div>
                </div>
                <div className="order-sum-info-wrap">
                  <div className="order-sum-item-atr">Quantity:</div>
                  <div className="order-sum-item-value">1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-sum-item-price-wrap">
            <div className="order-sum-item-price">$25.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryItems;
