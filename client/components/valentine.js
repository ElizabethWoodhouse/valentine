import React, { Component } from "react";

class Valentine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayValentine: {},
		};
		this.chooseRandom = this.chooseRandom.bind(this);
	}

	componentDidMount() {
		//do the props functions to get all valentines options
		console.log("Yes, the component did mount");
		this.chooseRandom();
	}

	chooseRandom() {
		const valentine = "Valentine's day card";
		this.setState({ displayValentine: valentine });
	}

	render() {
		return (
			<div id='valentine'>
				<img src='/heart.png' />
				<p> Some random text about valentine's </p>
			</div>
		);
	}
}

//map state

//map dispatch

//connect what you're exporting

export default Valentine;
