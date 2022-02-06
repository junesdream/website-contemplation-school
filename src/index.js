import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Contemplation from "./components/pages/Contemplation";
import Vision from "./components/pages/Vision";
import Pricing from "./components/pages/Pricing";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />

			<Route path="/contemplation" element={<Contemplation />} />
			<Route path="/vision" element={<Vision />} />
			<Route path="/pricing" element={<Pricing />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</Router>,

	document.getElementById("root")
);
