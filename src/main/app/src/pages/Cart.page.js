import React, { useState, useEffect, useContext } from 'react';
import useScript from '../utils/useScript.hook';
import { Store } from '../components/hoc/Store';
import { BeatLoader } from 'react-spinners';
import { useGetCart, addToCart, saveLocal } from '../components/hoc/cart.actions';
import { removeFromCart, updateQuatity } from '../components/hoc/cart.actions';
import CartItem from '../components/hoc/CartItem';
import FormItem from '../components/checkout/FormItem';

const Cart = ({handleCartButton}) => {
	const { state, dispatch } = useContext(Store);
	const [ inputs, setInputs ] = useState({});
	const [ subTotal, setSubTotal ] = useState((0).toFixed(2));
	const [ cartItems, setCartItems ] = useState();
	const [ loading, setLoading ] = useState(true);

	useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
	useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

	useEffect(
		() => {
			if (cartItems) {
				if (state.length === cartItems.length && state.length !== 0) {
					let total = 0;
					state.forEach((item, index) => {
						if (cartItems[index].is_discount) {
							total += cartItems[index].discount_price * item.quantity;
						}
						else {
							total += cartItems[index].original_price * item.quantity;
						}
					});
					setSubTotal(total.toFixed(2));
				}

				setLoading(false);
			}
		},
		[ cartItems, state ]
	);
	// Get item data from cart
	let url = 'https://hha-capstone.herokuapp.com/api/customer/order?';
	state.forEach(({ id }) => {
		url += `id=${id}&`;
	});
	// ! Grabs cart item info from API of items in state
	useGetCart(state, url, setCartItems);

	return (
		<div>
			<div data-open-product="" data-wf-cart-type="rightSidebar" className="w-commerce-commercecartwrapper cart">
				<div className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper">
					{' '}
					<div className="w-commerce-commercecartcontainer cart-container">
						<div className="w-commerce-commercecartheader cart-header">
							<h4 className="head-jumbo-tiny">your cart</h4>
							<a onClick={handleCartButton} href="#" className="w-commerce-commercecartcloselink close-button w-inline-block">
								<img src="https://res.cloudinary.com/hsse18xji/image/upload/v1612155757/HHA/images/close-icon_lsdnor.svg" width="16" alt="" className="icon" />
							</a>
						</div>
						<div className="w-commerce-commercecartformwrapper cart-form-wrapper">
							<form className="w-commerce-commercecartform cart-default-state">
								{' '}
								<div className="test-cart-list">
									{loading ? (
										<div className="loader-container-checkout">
											<BeatLoader color="red" />
										</div>
									) : (
										<div>
											{state.length === cartItems.length ? (
												cartItems.map(
													(
														{
															product_id,
															discount_price,
															image_url,
															is_discount,
															original_price,
															product_name,
															weight_value,
															weight_type_name
														},
														index
													) => (
														<FormItem
															key={product_id}
															id={product_id}
															image={image_url}
															itemName={product_name}
															price={is_discount ? discount_price : original_price}
															isDiscount={is_discount}
															ogPrice={original_price}
															qty={state[index].quantity}
															weight={weight_value}
															weightType={weight_type_name}
															dispatch={dispatch}
														/>
													)
												)
											) : null}
										</div>
									)}
									<script
										type="text/x-wf-template"
										id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb80"
									/>
									<div
										className="w-commerce-commercecartlist cart-list"
										data-wf-collection="database.commerceOrder.userItems"
										data-wf-template-id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb80"
									/>
									<div className="w-commerce-commercecartfooter cart-footer">
										<div className="w-commerce-commercecartlineitem cart-item-total">
											<div>Subtotal</div>
											<div className="w-commerce-commercecartordervalue paragraph-bigger cart-item-total-price">
												${subTotal} CAD
											</div>
										</div>
										<a
											href="/#/checkout"
											value="Continue to Checkout"
											className="w-commerce-commercecartcheckoutbutton button cc-cart-button"
										>
											Continue to Checkout
										</a>
										{/* <div className="checkout-actions">
												<div
													className="cart-payment-buttons"
												>
													<a
														href="#"
														value="Continue to Checkout"
														className="w-commerce-commercecartcheckoutbutton button cc-cart-button"
													>
														Continue to Checkout
													</a>
												</div>
											</div> */}
									</div>
								</div>
							</form>
							{/* <div className="w-commerce-commercecartemptystate cart-empty-state">
										<div className="paragraph-light">No products in the cart.</div>
									</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
