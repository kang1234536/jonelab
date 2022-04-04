import React from "react";
import {
	BrowserRouter as BRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Header from 'Layout/Header';
import Home from 'Page/Home';


const RouterSet = () => {
	return (
		<BRouter>
			<Header />
			<div id="container">
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
		</BRouter>
	);
}

export default RouterSet;