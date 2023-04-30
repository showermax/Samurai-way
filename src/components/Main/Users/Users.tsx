import React from 'react';
import {UserType} from "../../../redux/usersReducer";

type UsersPropsType = {
    userList: UserType[],
    addUser: ()=> void
}
export const Users = (props: UsersPropsType) => {

    return (
        <div>
            <h2>User Page</h2>
            {props.userList.map(el => {
                return (
                <div key={el.id} style={{display: 'flex'}}>
                <div>{el.photo.small}</div>
                <div>{el.name}</div>
                <div>{el.followed}</div>
            </div>)
            }
            )
            }



            <button onClick={props.addUser}>Add new user</button>


        </div>
    );
};

