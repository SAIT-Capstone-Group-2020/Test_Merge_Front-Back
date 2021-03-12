import React from 'react';
import SummaryInfo from './SummaryInfo';
import SummaryItems from './SummaryItems';
import SummaryOrder from './SummaryOrder';

const Summary = () => {
  return (
    <div className="section cc-checkout-page">
      <div className="order-details-wrapper">
        <h1 className="order-summary-main-header">Order Details</h1>
        <SummaryItems />
        <SummaryInfo />
      </div>
      <SummaryOrder />
    </div>
  );
};
export default Summary;
