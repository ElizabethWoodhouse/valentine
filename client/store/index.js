import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import valentinesReducer from "./valentine";
import genreReducer from "./genre";

// combine reducers here!
const reducer = combineReducers({
	valentinesReducer,
	genreReducer,
});

//
// // //{ valentinesReducer: {

// },
// // genreReducer: {}}

//apply any middleware
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

//create the store and export it
export default store;
