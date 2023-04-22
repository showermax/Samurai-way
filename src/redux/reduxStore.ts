import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profileReducer";
import {ChatReducer} from "./chatReducer";

let reducers = combineReducers({
    forDialogs: ChatReducer,
    forProfile: ProfileReducer
})


let store = createStore(reducers)

export default store;