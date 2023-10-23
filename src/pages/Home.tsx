import React from "react";

import "../app.scss";

import Header from "../components/Header";
import HeaderTop from "../components/Header/HeaderTop";
import Description from "../components/Description";
import BasicMaterials from "../components/BasicMaterials";
import About from "../components/About";
import Validation from "../components/Form";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";

export const Home: React.FC = () => {
	return (
		<div className="container">
			<ScrollToTopButton />
			<div className="bgImg">
				<HeaderTop />
				<Header />
			</div>
			<Description />
			<BasicMaterials />
			<About />
			<Validation />
			<Delivery />
			<div className="bgFooter">
				<Footer />
			</div>
		</div>
	);
};
