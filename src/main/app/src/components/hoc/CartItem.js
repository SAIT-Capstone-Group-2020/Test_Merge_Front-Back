import React, { useState } from 'react';
import { removeFromCart, updateQuatity } from './cart.actions';

const CartItem = (id, itemName, weight, weightType, qty, price, image, dispatch, isDiscount, ogPrice) => {

	const [ input, setInput ] = useState(qty);
	const handleRemove = e => {
		e.preventDefault();
		removeFromCart(id, dispatch);
	};

	const handleInput = e => {
		e.preventDefault();
		if (e.keyCode === 13) {
			return false;
		}
		setInput(e.target.value);
		// if (isDiscount) {
		// 	setItemOgPrice((Math.round(ogPrice * e.target.value * 100) / 100).toFixed(2));
		// }
	};

	return (
		<div>
			<div className="test-cart-item">
				<img
					style={{ backgroundImage: `url(${image})` }}
					sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 53vw, 24vw"
					alt=""
					className="w-commerce-commercecartitemimage test-cart-image"
				/>
				<div className="test-cart-item-info-wrap">
					<div className="w-commerce-commercecartproductname test-product-name-text test-cc-name-text-cart">
						{itemName}
					</div>
					<div className="test-cart-price">price</div>
					<div className="test-cart-option-list">
						<div className="test-cart-option-wrap">
							<div className="test-cart-option-type">Weight: </div>
							<div className="test-cart-option-item-value">{`${weight}${weightType}`}</div>
						</div>
						<button className="test-cart-remove-button w-button" onClick={handleRemove}>
							REMOVE
						</button>
					</div>
				</div>
				<div className="test-input-field">
					<input
						type="number"
						className="checkout-num-input w-input"
						maxLength="256"
						name="qty"
						value={input}
						id="qty"
						required
						min={0}
						onChange={handleInput}
					/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
