import React, { useState, useEffect, useContext } from 'react';
import SummaryInfo from './SummaryInfo';
import SummaryItems from './SummaryItems';
import SummaryOrder from './SummaryOrder';
import useScript from '../../utils/useScript.hook';
import Alert from './Alert.js';

// ! Import for Context/reducer
import { Store } from '../hoc/Store';
import { clearCart } from '../hoc/cart.actions';

const Summary = () => {
  const { state, dispatch } = useContext(Store);
  const [summary, setSummary] = useState(
    JSON.parse(localStorage.getItem('hhaSummary')),
  );
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  useEffect(() => {
    if (summary) {
      clearCart(dispatch);
    }
  }, []);

  return !summary ? (
    <div className="section cc-checkout-page">
      <Alert msg="Error: No Order Summary" style={{ top: '0' }} />
      <div className="order-details-wrapper">
        <h1 className="order-summary-main-header">Order Details</h1>
        <SummaryItems cartItems={[]} cart={[]} />
        <SummaryInfo inputs={{ name: '', email: '', phone: '', date: '' }} />
      </div>
      <SummaryOrder orderSummary={{ total: 0.0, gst: 0.0, finalTotal: 0.0 }} />
    </div>
  ) : (
    <div className="section cc-checkout-page">
      <div className="order-details-wrapper">
        <h1 className="order-summary-main-header">Order Details</h1>
        <SummaryItems cartItems={summary.cartItems} cart={summary.cart} />
        <SummaryInfo inputs={summary.inputs} />
      </div>
      <SummaryOrder orderSummary={summary.orderSummary} />
    </div>
  );
};
export default Summary;
