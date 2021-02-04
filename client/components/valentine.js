import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchValentines } from "../store/valentine";
import { fetchGenres } from "../store/genre";

class Valentine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayValentine: {},
		};
		this.chooseRandom = this.chooseRandom.bind(this);
	}

	async componentDidMount() {
		await this.props.loadValentines();
		this.props.loadGenres();
		//do the props functions to get all valentines options
		console.log("Yes, the component did mount");
		this.chooseRandom();
	}

	chooseRandom() {
		const randomElement = this.props.valentines[0];
		console.log("random", randomElement);
		this.setState({ displayValentine: randomElement });
	}

	render() {
		return (
			<>
				<div id='valentine'>
					<img src='/heart.png' />
					<p> {this.state.displayValentine.content} </p>
				</div>
				<button onClick={() => this.chooseRandom()}>
					{" "}
					Give me a different one!
				</button>
			</>
		);
	}
}

//map state
const mapState = (props) => {
	return {
		valentines: props.valentinesReducer.valentines,
		genre: props.genreReducer.genres,
	};
};
//map dispatch

const mapDispatch = (dispatch) => {
	return {
		loadValentines: () => dispatch(fetchValentines()),
		loadGenres: () => dispatch(fetchGenres()),
	};
};

//connect what you're exporting

export default connect(mapState, mapDispatch)(Valentine);
