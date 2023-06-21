import {connect} from "react-redux";
import {Users} from "./Users";
import {
    addUserAC,
    getUsersAC,
    setIsLoadingAC,
    setPageAC,
    setUsersCountAC,
    UsersStateType,
    UserType
} from "../../../redux/usersReducer";
import s from './Users.module.css'
import {ReduxStateType} from "../../../redux/reduxStore";
import React from "react";
import axios from "axios";
import {Loader} from "../../Common/Loader";

type UsersClassPropsType = {
    userList: UserType[],
    count: number
    page: number
    totalCount: number
    isLoading:boolean
    addUser: () => void
    getUsers: (users: UserType[]) => void
    setPage: (page: number) => void
    setUsersCount: (c: number) => void
    setIsLoading: (i: boolean) => void
}
class UsersClass extends React.Component<UsersClassPropsType> {
    // constructor(props:any) {
    //     super(props)
    // }
    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(resp => {
            this.props.setIsLoading(false)
            this.props.getUsers(resp.data.items)
            this.props.setUsersCount(resp.data.totalCount)
            console.log(resp.data.totalCount)
        })
    }

    changePage = (page: number) => {
        this.props.setPage(page)
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`).then(resp => {
            this.props.setIsLoading(false)
            this.props.getUsers(resp.data.items)
        })
    }

    render() {return <>
        {this.props.isLoading ? <div className={s.loading}><Loader/></div> :
        <Users userList={this.props.userList}
                               count={this.props.count}
                               page={this.props.page}
                               totalCount={this.props.totalCount} changePage={this.changePage}/>}
    </>
    }
};
const mapStateToProps = (state: ReduxStateType) => {
    return {
        userList: state.forUsers.users,
        count: state.forUsers.count,
        page: state.forUsers.page,
        totalCount: state.forUsers.totalCount,
        isLoading: state.forUsers.isLoading
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
        },
        setIsLoading: (isLoading: boolean) =>{
            dispatch(setIsLoadingAC(isLoading))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)