import React from 'react';

const SummaryItems = ({ cartItems, cart }) => {
	return (
		<div className="order-summary-items-wrap">
			<h3 className="order-summary-header">Items in Order</h3>
			<div className="order-sum-items-flex">
				{cartItems ? (
					cartItems.map(
						(
							{
								discount_price,
								image_url,
								is_discount,
								original_price,
								product_id,
								product_name,
								weight_type_name,
								weight_value
							},
							index
						) => (
							<div className="order-sum-item" key={product_id}>
								<div className="order-sum-item-details">
									<div className="order-sum-item-detail-img">
										<div
											className="order-item-img"
											style={{ backgroundImage: `url("${image_url}")` }}
										/>
									</div>
									<div className="order-sum-item-desc">
										<div className="order-sum-item-info-wrap">
											<div className="order-sum-item-info-txt order-sum-item-title">
												{product_name}
											</div>
											<div className="order-sum-info-wrap">
												<div className="order-sum-item-atr">Weight:</div>
												<div className="order-sum-item-value">{`${weight_value} ${weight_type_name}`}</div>
											</div>
											<div className="order-sum-info-wrap">
												<div className="order-sum-item-atr">Quantity:</div>
												<div className="order-sum-item-value">{cart[index].quantity}</div>
											</div>
										</div>
									</div>
								</div>
								{is_discount ? (
									<div className="order-sum-item-price-wrap">
										<div className="order-sum-item-price-discount">
											$
											{(original_price * cart[index].quantity * 100 / 100).toFixed(2)}
										</div>
										<div className="order-sum-item-price">
											$
											{(discount_price * cart[index].quantity * 100 / 100).toFixed(2)}
										</div>
									</div>
								) : (
									<div className="order-sum-item-price-wrap">
										<div className="order-sum-item-price-no-disc">
											$
											{(original_price * cart[index].quantity * 100 / 100).toFixed(2)}
										</div>
									</div>
								)}
							</div>
						)
					)
				) : null}
			</div>
		</div>
	);
};
export default SummaryItems;
