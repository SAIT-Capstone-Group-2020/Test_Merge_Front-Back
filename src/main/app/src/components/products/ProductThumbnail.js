import React, { Component } from 'react';

class ProductThumbnail extends Component {
	state = {
		loading : true,
		productList : [],
	};

	async componentDidMount() {
		const response = await fetch('https://capstone-hha.herokuapp.com/api/customer/product');
		const allProductData = await response.json();
		this.setState({ productList: allProductData, loading: false });
	}

	render() {
		return (
			<>
				{this.state.loading || !this.state.productList ? (
					<div>No product...</div>
				) : (
					<>
						{this.state.productList.map((productDetail) => {
							return (
								<div class="product">
									<a href="#" class="product-thumbnail-link w-inline-block">
										<div class="product-thumbnail-image" style={{"backgroundImage": `url(${productDetail.image_url})`}}/>
										<div class="cc-product-desc cc-product-desc-name">
											<div class="product-name-text">{productDetail.product_name}</div>
										</div>
										<div class="cc-product-desc cc-product-desc-price">
											<div class="product-price-text">${productDetail.discount_price}</div>
										</div>
									</a>
									<a href="#" class="product-thumbnail-button-link w-inline-block">
										<h6 class="product-thumbnail-button-text">in store only</h6>
									</a>
								</div>
							);
						})}
					</>
				)}
			</>
		);
	}
}

export default ProductThumbnail;