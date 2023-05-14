import {connect} from "react-redux";
import {Users} from "./Users";
import {addUserAC, getUsersAC, setPageAC, setUsersCountAC, UsersStateType, UserType} from "../../../redux/usersReducer";

import {ReduxStateType} from "../../../redux/reduxStore";

const mapStateToProps = (state: ReduxStateType) => {
    console.log(state)
    return {
        userList: state.forUsers.users,
        count: state.forUsers.count,
        page: state.forUsers.page,
        totalCount: state.forUsers.totalCount
    }
}
const mapDispatchToProps = (dispatch: (action:any)=>void) => {
    return {
        addUser: () => {
            dispatch(addUserAC())
        },
        getUsers: (users: UserType[]) =>{
            dispatch(getUsersAC(users))
        },
        setPage:(page:number)=>{
            dispatch(setPageAC(page))
        },
        setUsersCount: (totalCount: number) =>{
            dispatch(setUsersCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)