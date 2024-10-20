import { combineReducers } from "redux";
import stateReducer from "./reducers/stateReducer";

const rootReducer = combineReducers( {
    state: stateReducer
});

export default rootReducer;