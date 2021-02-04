import axios from "axios";

//action
const SET_GENRES = "SET_GENRES";

//action creator
export const setGenres = (genres) => {
	return {
		type: SET_GENRES,
		genres: genres,
	};
};

//writing to state

//thunk
export const fetchGenres = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get("/api/genre");
			const action = setGenres(data);
			dispatch(action);
		} catch (err) {
			console.error(err.message);
		}
	};
};

//initialState

const initialState = {
	genres: [],
	singleGenre: {},
};

export default function genresReducer(state = initialState, action) {
	switch (action.type) {
		case SET_GENRES:
			return { genres: action.genres };
		default:
			return state;
	}
}
