import React from "react";

import "../app.scss";

import ScrollToTopButton from "../components/ScrollToTop";
import HeaderTop from "../components/Header/HeaderTop";
import { BtnMaterials } from "../components/SwitchMaterials";
import Form from "../components/Form";
import Footer from "../components/Footer";

export const Materials: React.FC = () => {
	return (
		<div className="container">
			<ScrollToTopButton />
			<HeaderTop />
			<BtnMaterials />
			<Form />
			<div className="bgFooter">
				<Footer />
			</div>
		</div>
	);
};
