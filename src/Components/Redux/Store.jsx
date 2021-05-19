import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./Reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    news: newsReducer,

})

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;
export default store;