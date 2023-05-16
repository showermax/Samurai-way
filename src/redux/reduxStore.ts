import {combineReducers, createStore} from "redux";
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


let store = createStore(reducers)
export type ReduxStateType = ReturnType<typeof reducers>
export default store;