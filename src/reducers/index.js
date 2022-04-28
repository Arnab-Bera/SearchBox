import peopleReducer from "./peopleReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    peopleReducer,
})

export default rootReducer;