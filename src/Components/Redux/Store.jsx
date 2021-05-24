import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./Reducer";
import thunk from "redux-thunk";
import {loadReducer} from "./LoadReducer";

let reducers = combineReducers({
    news: newsReducer,
    loading: loadReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;
export default store;