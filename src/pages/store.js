import rootReducers from "./reducers";

import { legacy_createStore } from "redux";

const store = legacy_createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
