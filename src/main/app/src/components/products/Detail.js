import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Store } from '../hoc/Store';
import { useGetCart, addToCart, saveLocal } from '../hoc/cart.actions';

const Detail = () => {
  const { state, dispatch } = useContext(Store);
  const { productId } = useParams();
  const [ product, setProduct ] = useState([]);
  const [input, setInput] = useState(1);

  const handleQuantityInputChange = e => {
    setInput(e.target.value);
  };

  const testAdd = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        return false;
    }
    addToCart(productId, input, dispatch);
  };

  useEffect(() => {
    axios.get(`https://hha-capstone.herokuapp.com/api/customer/product/${productId}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  },[])

  return (
    <div className="section cc-product-detail">
      <div className="product-image" style={{ backgroundImage: `url(${product.image_url})` }}></div>
    <div className="product-details-wrap">
      <div className="product-detail-main-details">
          <h1 className="product-detail-name">{ product.product_name }</h1>
        <div className="paragraph-light">Should be product description here. For now, it's same as product name: { product.description }</div>
      </div>
      <div className="divider cc-dark-divider"></div>
      <div className="product-info">
        <ul className="list w-list-unstyled">
          <li className="list-item">
            <div className="paragraph-light">Category</div>
            <div className="product-detail-measurement">
              <div className="product-detail-info cc-mid-text">{ product.category_name }</div>
            </div>
          </li>
          <li className="list-item">
            <div className="paragraph-light">Weight</div>
            <div className="product-detail-measurement">
              <div className="product-detail-info">{ product.weight_value } { product.weight_type_name }</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="product-detail-main-details">
        <div className="product-detail-price">${ product.discount_price }</div>
      </div>
      <div className="add-to-cart">
        <form className="w-commerce-commerceaddtocartform add-to-cart-default-state" onSubmit={testAdd}><label for="quantity-3f8ec8b146ca9ed4b1d9cb3082673eb" className="label">Quantity</label>
          <div className="product-detail-action-wrap">
              <input type="number" pattern="^[0-9]+$" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput input-field cc-quantity-field" required
                min={1} value={input}
                onChange={handleQuantityInputChange}/><input type="submit" value="Add To Cart" className="w-commerce-commerceaddtocartbutton button cc-product-detail-cart-button"/></div>
        </form>
        {/* <div style={{"display":"none"}} className="w-commerce-commerceaddtocartoutofstock status-message">
          <div>This product is out of stock.</div>
        </div> */}
        {/* <div data-node-type="commerce-add-to-cart-error" style="display:none" className="w-commerce-commerceaddtocarterror error-state">
        </div> */}
      </div>
    </div>
  </div>
  );
};

Detail.propTypes = {};

export default Detail;