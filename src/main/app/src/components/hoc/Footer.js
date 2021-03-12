import React from 'react';

const Footer = () => {
  return (
    <div className="footer-section cc-footer-section">
    <div className="footer-container">
      <div className="w-layout-grid footer">
        <div className="footer-div">
          <a href="/" className="nav-logo-link w-inline-block">
          <div style={{"width": "100px","height": "100px"}}></div>
          </a>
        </div>
        <div className="footer-div">
          <div className="label cc-footer-label">our company</div>
          <div className="links-section-footer">
            <p className="paragraph-light cc-footer-paragraph-light">Unit E - 4710 17 Avenue SE<br/>Calgary, AB, Canada T2A 0V1</p>
            <p className="paragraph-light cc-footer-paragraph-light">Open Daily Mon - Sun, 8 am - 8 pm</p>
            <a href="tel:+14032724789" className="footer-link">+1 (403) 272-4789</a>
          </div>
        </div>
        <div className="footer-div">
          <div className="label cc-footer-label">connect</div>
          <div className="links-section-footer">
            <a href="https://www.instagram.com/hiep_hoa_asian_food_market/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            <a href="https://www.facebook.com/pages/category/Grocery-Store/Hiep-Hoa-Asian-Food-Market-111881587191113/" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
            <a href="https://www.skipthedishes.com/hiep-hoa-asian-food-market" target="_blank" rel="noopener noreferrer" className="footer-link">Skip the Dishes</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Footer.propTypes = {};

export default Footer;