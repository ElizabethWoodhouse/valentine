//actions
const GET_VALENTINE = "GET_VALENTINE";

//action creators
export const getValentines = (valentine) => {
	return {
		type: SET_VALENTINES,
		valentines: valentine,
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
export default function genresReducer(state = initialState, action) {
	switch (action.type) {
		case SET_VALENTINES:
			return { valentines: action.valentine };
	}
}
