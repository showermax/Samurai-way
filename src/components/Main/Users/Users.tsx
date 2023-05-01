import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";
import {log} from "util";

type UsersPropsType = {
    userList: UserType[],
    addUser: ()=> void
    getUsers: (users: UserType[])=>void
}
export const Users = (props: UsersPropsType) => {
    let users = [
        {id: 1, name: 'Danik1', photos: {small: null, large: null}, status: null, followed: false, uniqueUrlName:null},
        {id: 2, name: 'Kirill1', photos: {small: null, large: null}, status: null, followed: false, uniqueUrlName:null},
        {id: 3, name: 'Ivan1', photos: {small: null, large: null}, status: null, followed: false, uniqueUrlName:null},
        {id: 4, name: 'Denis1', photos: {small: null, large: null}, status: null, followed: false, uniqueUrlName:null}
    ]

    const getFromServer = ()=> {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp=> {
            console.log(resp.data.items)
            props.getUsers(resp.data.items)
        })
    }
    useEffect(getFromServer,[])
    return (
        <div>
            <h2>User Page</h2>
            {props.userList.map(el => {
                return (
                <div key={el.id} style={{display: 'flex'}}>
                <div>{el.photos.small}</div>
                <div>{el.name}</div>
                <div>{el.followed}</div>
            </div>)
            }
            )
            }
            <button onClick={props.addUser}>Add new user</button>
            <button onClick={()=>props.getUsers(users)}>Get Users</button>


        </div>
    );
};

