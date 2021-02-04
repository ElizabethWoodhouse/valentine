import axios from "axios";

//actions
const GET_VALENTINE = "GET_VALENTINE";

//action creators
export const getValentines = (valentines) => {
	return {
		type: GET_VALENTINE,
		valentines: valentines,
	};
};

//thunks
export const fetchValentines = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/api/valentine`);
			dispatch(getValentines(data));
		} catch (error) {
			console.log("Could not fetch valentines", error);
		}
	};
};

//initialState
const initialState = {
	valentines: [],
	loading: true,
};

//reducer
export default function valentinesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_VALENTINE:
			return { valentines: action.valentines };
		default:
			return state;
	}
}
