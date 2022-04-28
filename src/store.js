import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "./reducers";
import { fetchPeopleData } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(fetchPeopleData(''));

export default store;