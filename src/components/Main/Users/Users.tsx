import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";


type UsersPropsType = {
    userList: UserType[],
    addUser: () => void
    getUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props:any) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
            console.log(resp.data.items)
            props.getUsers(resp.data.items)
        })
    }

    render() {
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
                {/*<button onClick={this.props.addUser}>Add new user</button>*/}
            </div>
        )
    }
};

