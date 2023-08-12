import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {ProfileReducer} from "./profileReducer";
import {ChatReducer} from "./chatReducer";
import {UsersReducer} from "./usersReducer";
import {LoginReducer} from "./loginReducer";

let reducers = combineReducers({
    forDialogs: ChatReducer,
    forProfile: ProfileReducer,
    forUsers: UsersReducer,
    loginData: LoginReducer
})


let store = createStore(reducers, applyMiddleware(thunk))
export type ReduxStateType = ReturnType<typeof reducers>
export default store;