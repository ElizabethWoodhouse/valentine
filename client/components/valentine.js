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
		this.chooseRandom();
	}

	chooseRandom() {
		const randomElement = this.props.valentines[
			Math.floor(Math.random() * this.props.valentines.length)
		];
		this.setState({ displayValentine: randomElement });
	}

	render() {
		let valentine = this.state.displayValentine.content || [];

		if (valentine.length > 0) {
			valentine = valentine.split(",");
		}

		return (
			<>
				<div id='valentine'>
					<img src='/heart.png' />{" "}
					<div className='valentinePoem'>
						{valentine.map((val, index) => {
							return (
								<p key={index}>
									{val}
									<br />{" "}
								</p>
							);
						})}{" "}
					</div>
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
