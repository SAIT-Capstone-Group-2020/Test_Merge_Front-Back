import React, { useState, useEffect } from 'react';
import NewItem from './NewItem';
import useFetch from '../../utils/useFetch.hook';
import { BeatLoader } from 'react-spinners';

const WhatsNew = () => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);
  useFetch(
    'https://hha-capstone.herokuapp.com/api/customer/search?sort=product_id:desc&page=1',
    setItems,
  );
  return (
    <div className="whats-new-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header">
            New
            <br />
            <span className="main-page-header-span">Products</span>
          </h1>
        </div>
      </div>
      <div className="collection-list-wrapper">
          {loading ? (
            <div className="loader-container">
              <BeatLoader color="red" />
            </div>
          ) : (
            <div className="collection-grid-wrapper">
            {items.content.map(
              ({
                product_id,
                discount_price,
                image_url,
                is_discount,
                original_price,
                product_name,
              }) => (
                <NewItem
                  key={product_id}
                  id={product_id}
                  image={image_url}
                  itemName={product_name}
                  price={is_discount ? discount_price : original_price}
                  isDiscount={is_discount}
                  ogPrice={original_price}
                />
              ),
            )}
            </div>
          )}
      </div>
    </div>
  );
};

export default WhatsNew;
