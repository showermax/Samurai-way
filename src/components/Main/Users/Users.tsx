import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";


type UsersPropsType = {
    userList: UserType[],
    count: number
    page: number
    totalCount: number
    addUser: () => void
    getUsers: (users: UserType[]) => void
    setPage: (page: number) => void
    setUsersCount: (c: number) => void
}

export class Users extends React.Component<UsersPropsType> {
    // constructor(props:any) {
    //     super(props)
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(resp => {
            this.props.getUsers(resp.data.items)
            this.props.setUsersCount(resp.data.totalCount)
            console.log(resp.data.totalCount)
        })
    }

    changePage = (page: number) => {
        this.props.setPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`).then(resp => {
            this.props.getUsers(resp.data.items)
        })
    }

    render() {
        let arr = []
        let k=this.props.totalCount/100
        let numberOfPages = Math.ceil(k / this.props.count)
        for (let i = 1; i <= numberOfPages; i++) {
            arr.push(i)
        }


        return (
            <div>
                <h2>User Page</h2>
                {this.props.userList.map(el => {
                        return (
                            <div key={el.id} style={{display: 'flex'}}>
                                <div>{el.name}</div>
                                <img src={el.photos.small ? el.photos.small : ''} alt=""/>
                                <div>{el.followed}</div>
                            </div>)
                    }
                )
                }
                <div style={{display: 'flex'}}>{arr.map(el => <div key={el} onClick={() => this.changePage(el)}>{`- ${el} `}</div>)}</div>
                <div>Users per page: {this.props.count}</div>

            </div>
        )
    }
};

