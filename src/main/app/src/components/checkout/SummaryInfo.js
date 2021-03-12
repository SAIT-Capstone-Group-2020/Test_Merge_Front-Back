import React from 'react';

const SummaryInfo = () => {
  return (
    <div className="order-sum-payment-wrap">
      <h3 className="order-summary-header">Payment Info</h3>
      <h5 className="order-summary-header order-sum-sub-head">Name</h5>
      <div className="bill-info-txt">John Doe</div>
      <h5 className="order-summary-header order-sum-sub-head">Email</h5>
      <div className="bill-info-txt">jdoe@gmail.com</div>
      <h5 className="order-summary-header order-sum-sub-head">Phone</h5>
      <div className="bill-info-txt">403-123-4567</div>
      <h5 className="order-summary-header order-sum-sub-head">Order Date</h5>
      <div className="bill-info-txt">02/02/2021</div>
    </div>
  );
};
export default SummaryInfo;
