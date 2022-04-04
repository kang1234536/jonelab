import React from "react";
import {
	BrowserRouter as BRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Header from 'Layout/Header';
import Home from 'Page/Home';


const RouterSet = () => {
	return (
		<BRouter>
			<Header />
			<div id="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" replace />}  />
				</Routes>
			</div>
		</BRouter>
	);
}

export default RouterSet;