import React from "react";

import "../app.scss";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import Form from "../components/Form";
import HeaderTop from "../components/Header/HeaderTop";
import { Rent } from "../components/Rent";

export const Services: React.FC = () => {
	return (
		<div className="container">
			<ScrollToTopButton />
			<HeaderTop />
			<Rent />
			<Form />
			<div className="bgFooter">
				<Footer />
			</div>
		</div>
	);
};
