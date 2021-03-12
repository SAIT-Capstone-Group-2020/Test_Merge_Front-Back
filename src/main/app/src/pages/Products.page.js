import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import useScript from '../utils/useScript.hook';
import Navbar from '../components/hoc/Navbar';
import ProductsHeader from '../components/products/ProductsHeader';
import CategorySidebar from '../components/products/CategorySidebar';
import SortDropdown from '../components/products/SortDropdown';
import ProductThumbnail from '../components/products/ProductThumbnail';
import Footer from '../components/hoc/Footer';

function Products() {
	const [ products, setProducts ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://hha-capstone.herokuapp.com/api/customer/product')
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const searchHandler = (value) => {
		setSearchValue(value);
	};

	let updateProducts = products.filter((item) => {
		return item.product_name.toLowerCase().includes(searchValue);
	}, []);

	useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
	useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

	return (
		<div>
			<Navbar />
			<ProductsHeader searchHandler={searchHandler} />
			<div class="product-list-section cc-product-list-section">
				<CategorySidebar />
				<div class="product-list-elements-wrapper">
					<SortDropdown />
					<div class="product-list-wrapper">
						<div class="product-list-wrap">
							{(searchValue === '' ? products : updateProducts).map((product) => (
								<div class="product" key={product.product_name}>
									<a href={`/product/${product.product_id}`}  class="product-thumbnail-link w-inline-block">
										<div
											class="product-thumbnail-image"
											style={{ backgroundImage: `url(${product.image_url})` }}
										/>
										<div class="cc-product-desc cc-product-desc-name">
											<div class="product-name-text">{product.product_name}</div>
										</div>
										<div class="cc-product-desc cc-product-desc-price">
											<div class="product-price-text">${product.discount_price}</div>
										</div>
									</a>
									<a href={`/product/${product.product_id}`}  class="product-thumbnail-button-link w-inline-block">
										<h6 class="product-thumbnail-button-text">in store only</h6>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Products;
