import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./modules/user";

const middlewares = [thunk];

const reducer = combineReducers({
  user
});

let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
