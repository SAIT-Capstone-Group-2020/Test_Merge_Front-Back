import React from 'react';

const NewItem = ({ id, image, itemName, price, isDiscount, ogPrice }) => {
  return (
    <div className="collection-item main-collection-item grid-collection-item">
      <a
        href={`/#/product/${id}`}
        className="product-image-home main-product-image-grid-home w-inline-block"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="cc-product-desc-home cc-desc-grid-home">
          <div className="product-name-text-wrap">
            <div className="product-name-text-home first-lang">{itemName}</div>
          </div>
          {isDiscount ? <div>
            <div className="product-price-text-home-disc">${(ogPrice).toFixed(2)}</div>
            <div className="product-price-text-home">${(price).toFixed(2)}</div>
          </div>
          : <div className="product-price-text-home">${(price).toFixed(2)}</div>}
        </div>
      </a>
    </div>
  );
};
export default NewItem;
