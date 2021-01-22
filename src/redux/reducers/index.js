import { combineReducers } from "redux";
import authorizationReducer from "./authorization.reducer";

const errorMessage = (state = null, action) => {
	const { type, error } = action;
  
	if (type === "RESET_ERROR_MESSAGE") {
	  	return null;
	} else if (error) {
	  	return error;
	}
  
	return state;
  }

export default combineReducers({
	authorizationReducer,
	errorMessage,
});
