import {connect} from "react-redux";
import {Users} from "./Users";
import {addUserAC, UsersStateType} from "../../../redux/usersReducer";

import {ReduxStateType} from "../../../redux/reduxStore";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        userList: state.users.users
    }
}
const mapDispatchToProps = (dispatch: (action:any)=>void) => {
    return {
        addUser: () => {
            dispatch(addUserAC())
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)