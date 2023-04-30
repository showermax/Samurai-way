import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profileReducer";
import {ChatReducer} from "./chatReducer";
import {UsersReducer} from "./usersReducer";

let reducers = combineReducers({
    forDialogs: ChatReducer,
    forProfile: ProfileReducer,
    forUsers: UsersReducer
})


let store = createStore(reducers)
export type ReduxStateType = ReturnType<typeof reducers>
export default store;