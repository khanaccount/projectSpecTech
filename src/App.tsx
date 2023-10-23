import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.scss";

import { Home } from "./pages/Home";
import { Materials } from "./pages/Materials";
import { Services } from "./pages/Services";

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/materials" element={<Materials />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		</>
	);
};

export default App;
