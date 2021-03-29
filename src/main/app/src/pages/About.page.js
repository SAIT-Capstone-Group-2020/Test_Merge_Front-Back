import React, { useState } from 'react';
import Navbar from '../components/hoc/Navbar';
import useScript from '../utils/useScript.hook';
import Footer from '../components/hoc/Footer';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

function Map() {
	const [ selected, setSelected ] = useState(false);
	return (
		<GoogleMap defaultZoom={18} defaultCenter={{ lat: 51.03895, lng: -113.966949 }}>
			<Marker
				position={{ lat: 51.03895, lng: -113.966949 }}
				onClick={() => {
					setSelected(true);
				}}
			/>

			{selected && (
				<InfoWindow
					position={{ lat: 51.03895, lng: -113.966949 }}
					onCloseClick={() => {
						setSelected(false);
					}}
				>
					<div>
						<h5>Hiep Hoa Asian Food Market</h5>
						<p>Asian grocery store</p>
						<p>Opens at 8:00 a.m. daily</p>
						<p>In-store shopping, Curbside pickup, Delivery all available</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const About = () => {
	useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff6189ef3859a509a1e9dfe');
	useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js');
	useScript('https://res.cloudinary.com/hntzzmpn9/raw/upload/v1612562182/hha/webflow_slud7c.js');

	return (
		<div>
			<Navbar />
			<div>
				<div className="section cc-about-section">
					<div className="intro-header" />
					<div className="intro-content" >
						<div className="intro-text" >
							<div className="head-jumbo cc-intro-head-jumbo">
								About Us<br />
							</div>
							<div className="paragraph-bigger cc-intro-paragraph-bigger">
								Hiep Hoa Asian Food Market<br />
							</div>
						</div>
					</div>
					<div className="container cc-about-story-container">
						<div className="main-heading-wrap">
							<h1>This is our story!</h1>
							<div className="paragraph-bigger cc-about-paragraph-bigger">Who are we?</div>
						</div>
						<div className="divider" />
						<div className="w-layout-grid main-paragraph-wrap cc-about-page-wrap">
							<p id="w-node-_09ca36a5-fae4-bce6-3492-250869e6e759-f19183dc" className="paragraph-light">
								We are an Asian Food Market which you can find a tons of special items with reasonable
								prices. If you have been at Hiep Hoa Asian Food Market, surely you will be surprised
								because we already renovated!
							</p>
							<p id="w-node-_09ca36a5-fae4-bce6-3492-250869e6e75b-f19183dc" className="paragraph-light">
								Same contents in Vietnamese: We are an Asian Food Market which you can find a tons of
								special items with reasonable prices. If you have been at Hiep Hoa Asian Food Market,
								surely you will be surprised because we already renovated!
							</p>
						</div>
					</div>
					<div className="section cc-about-info-section">
						<div className="about-page-info-wrap">
							<div className="map">
								<WrappedMap
									googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBBQNPerX486ulYlsrNp3bafOSieTseunw`}
									loadingElement={<div style={{ height: '100%' }} />}
									containerElement={<div style={{ height: '100%' }} />}
									mapElement={<div style={{ height: '100%' }} />}
								/>
							</div>

							<div className="about-info-section">
								<div className="w-layout-grid grid-main-info">
									<div
										id="w-node-bf60c0d9-ee4b-cd7d-b33f-5df05c93299d-f3147f70"
										className="store-info-wrap"
									>
										<div className="paragraph-bigger cc-about-paragraph-bigger">Address</div>
										<div className="paragraph-contact-text">
											Unit E - 4710 17 Ave. SE, Calgary, AB, Canada T2A 0V1<br />
										</div>
									</div>
									<div
										id="w-node-bf60c0d9-ee4b-cd7d-b33f-5df05c9329a3-f3147f70"
										className="store-info-wrap"
									>
										<div className="paragraph-bigger cc-about-paragraph-bigger">Hours</div>
										<div className="paragraph-contact-text">
											Daily Mon - Sun, 8am - 8pm<br />
										</div>
									</div>
									<div className="store-info-wrap">
										<div className="paragraph-bigger cc-about-paragraph-bigger">Phone</div>
										<a href="tel:+14032724789" className="footer-link cc-contact-link">
											Tel: (403) 272-4789
										</a>
										<div className="paragraph-contact-text cc-contact-link">
											Fax: (403) 273-6367<br />
										</div>
									</div>
									<div
										id="w-node-_88ee8a8b-98b0-e37a-7264-c3dacca837a3-f3147f70"
										className="store-info-wrap"
									>
										<div className="paragraph-bigger cc-about-paragraph-bigger">Email</div>
										<a
											href="mailto:marketing@hiephoaasianfoodmarket.com?subject=Email%20Inquiries%20for%20Hiep%20Hoa%20Asian%20Food%20Market"
											className="footer-link cc-contact-link cc-smaller-font-link"
										>
											marketing@hiephoaasianfoodmarket.com
										</a>
									</div>
									<div className="store-info-wrap">
										<div className="paragraph-bigger cc-about-paragraph-bigger">Connect</div>
										<a
											href="https://www.instagram.com/hiephoaasianfoodmarket/"
											target="_blank"
											className="footer-link cc-contact-link"
										>
											Instagram
										</a>
										<a
											href="https://www.facebook.com/pages/category/Grocery-Store/Hiep-Hoa-Asian-Food-Market-111881587191113/"
											target="_blank"
											className="footer-link cc-contact-link"
										>
											Facebook
										</a>
										<a
											href="https://www.skipthedishes.com/hiep-hoa-asian-food-market"
											target="_blank"
											className="footer-link cc-contact-link"
										>
											Skip the Dishes
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;