import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ErrorPage, Home, Valentine } from "./components";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/valentine' component={Valentine} />

				{/* {ErrorPage as fallback! */}
				<Route component={ErrorPage} />
			</Switch>
		);
	}
}

export default Routes;
