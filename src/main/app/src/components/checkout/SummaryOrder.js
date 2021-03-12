import React from 'react';

const SummaryOrder = () => {
  return (
    <div className="order-summary-wrapper order-confirm-summary">
      <div className="order-summary-wrap order-confirm-wrap">
        <h3 className="order-summary-header">Order Summary</h3>
        <div className="summary-price-container">
          <div className="summary-desc">Total: </div>
          <div className="summary-price">$75.00 CAD</div>
        </div>
        <div className="summary-price-container">
          <div className="summary-desc">Calculated GST:</div>
          <div className="summary-price">$3.75 CAD</div>
        </div>
        <div className="order-summary-total-container">
          <h5 className="order-total-price">Order Total: </h5>
          <h5 className="order-total-price">$78.75 CAD</h5>
        </div>
      </div>
    </div>
  );
};
export default SummaryOrder;
