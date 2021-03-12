import React from 'react';
import useScript from '../utils/useScript.hook';
import Navbar from '../components/hoc/Navbar';
import Detail from '../components/products/Detail';
import Footer from '../components/hoc/Footer';

function ProductDetail() {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  useScript(
    'https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js',
  );
  return (
    <div>
      <Navbar />
      <Detail />
      <Footer />
    </div>
  );
}

export default ProductDetail;