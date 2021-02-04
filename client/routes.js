import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Valentine } from "./components";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/valentine' component={Valentine} />

				{/* {Home as fallback! */}
				<Route component={Home} />
			</Switch>
		);
	}
}

export default Routes;
