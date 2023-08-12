import {connect} from "react-redux";
import {Users} from "./Users";
import {
    addUserAC, followUserAC,
    getUsersAC, getUsersTC, setIsFollowingAC,
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
import {usersApi} from "../../../DAL/api/api";

type UsersClassPropsType = {
    userList: UserType[],
    count: number
    page: number
    totalCount: number
    isLoading:boolean
    isFollowingArr:Array<number>
    addUser: () => void
    // getUsers: (users: UserType[]) => void
    getUsersTC: (page:number, count: number) => void
    following: (id: number) => void
    setPage: (page: number) => void
    setUsersCount: (c: number) => void
    setIsLoading: (i: boolean) => void
    setIsFollowing: (i:boolean, id: number) => void
}
class UsersClass extends React.Component<UsersClassPropsType> {
    // constructor(props:any) {
    //     super(props)
    // }
    componentDidMount() {
        this.props.getUsersTC(this.props.page, this.props.count)
        // this.props.setIsLoading(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`, {
        //     withCredentials:true
        // }).then(resp => {
        //     this.props.setIsLoading(false)
        //     this.props.getUsers(resp.data.items)
        //     this.props.setUsersCount(resp.data.totalCount)
        // })
        // usersApi.getUsers(this.props.page,this.props.count).then(resp =>{
        //         this.props.setIsLoading(false)
        //         this.props.getUsers(resp.items)
        //         this.props.setUsersCount(resp.totalCount)
        // } )
    }

    changePage = (page: number) => {
        this.props.setPage(page)
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`).then(resp => {
            this.props.setIsLoading(false)
            // this.props.getUsers(resp.data.items)
        })
    }
    follow = (id:number) => {
        this.props.setIsFollowing(true, id)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {withCredentials:true}).then(resp => {
            this.props.setIsFollowing(false, id)
            if (resp.data.resultCode === 0) this.props.following(id)
        })
    }
    unfollow = (id:number) => {
        this.props.setIsFollowing(true, id)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,  {withCredentials:true}).then(resp => {
            this.props.setIsFollowing(false, id)
            if (resp.data.resultCode === 0) this.props.following(id)
        })
    }

    render() {return <>
        {this.props.isLoading ? <div className={s.loading}><Loader/></div> :
        <Users userList={this.props.userList}
                               count={this.props.count}
                               page={this.props.page}
                               totalCount={this.props.totalCount}
               changePage={this.changePage}
               follow={this.follow}
               unfollow = {this.unfollow}
               isFollowingArr={this.props.isFollowingArr}
        />}
    </>
    }
};
const mapStateToProps = (state: ReduxStateType) => {
    return {
        userList: state.forUsers.users,
        count: state.forUsers.count,
        page: state.forUsers.page,
        totalCount: state.forUsers.totalCount,
        isLoading: state.forUsers.isLoading,
        isFollowingArr: state.forUsers.isFollowingArr,
    }
}
const mapDispatchToProps = (dispatch: (action:any)=>void) => {
    return {
        addUser: () => {
            dispatch(addUserAC())
        },
        // getUsers: (users: UserType[]) =>{
        //     dispatch(getUsersAC(users))
        // },
        getUsersTC: (page:number, count:number) => {
            dispatch(getUsersTC(page,count))
        },
        setPage:(page:number)=>{
            dispatch(setPageAC(page))
        },
        setUsersCount: (totalCount: number) =>{
            dispatch(setUsersCountAC(totalCount))
        },
        setIsLoading: (isLoading: boolean) =>{
            dispatch(setIsLoadingAC(isLoading))
        },
        following:(id:number) => {
            dispatch(followUserAC(id))
        },
        setIsFollowing:(isFollowing:boolean, id: number) =>{
            dispatch(setIsFollowingAC(isFollowing,id))
    }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)