import React from 'react';
import Navbar from '../components/hoc/Navbar';
import useScript from '../utils/useScript.hook';
import MainBanner from '../components/index/MainBanner';
import WeeklySale from '../components/index/WeeklySale';
import Featured from '../components/index/Featured';
import Footer from '../components/hoc/Footer';
import WhatsNew from '../components/index/WhatsNew';

const Home = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  return (
    <div>
      <Navbar />
      <MainBanner />
      <WeeklySale />
      <Featured />
      <WhatsNew />
      <Footer />
    </div>
  );
};

export default Home;
