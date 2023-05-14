import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";


type UsersPropsType = {
    userList: UserType[],
    count: number
    page: number
    addUser: () => void
    getUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPropsType> {
    // constructor(props:any) {
    //     super(props)
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(resp => {
            console.log(resp.data.items)
            this.props.getUsers(resp.data.items)
        })
    }

    render() {
        let arr=[]
        for (let i = 1; i < 5; i++) {
            arr.push(i)
        }
        function setPage (){}
        return (
            <div>
                <h2>User Page</h2>
                {this.props.userList.map(el => {
                        return (
                            <div key={el.id} style={{display: 'flex'}}>
                                <div>{el.photos.small}</div>
                                <div>{el.name}</div>
                                <div>{el.followed}</div>
                            </div>)
                    }
                )
                }
                <div className={'style.pagination'}> {this.props.count} {this.props.page} </div>
                {arr.map(el=><div key={el} onClick={setPage}>{el}</div>)}
                {/*<button onClick={this.props.addUser}>Add new user</button>*/}
            </div>
        )
    }
};

