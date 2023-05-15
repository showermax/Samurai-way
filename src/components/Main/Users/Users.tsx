import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    userList: UserType[],
    count: number
    page: number
    totalCount: number
    changePage: (page: number) => void
}

export const Users: React.FC<UsersPropsType> = ({totalCount,count, userList,changePage}) => {
        let arr = []
        let k=totalCount/100
        let numberOfPages = Math.ceil(k /count)
        for (let i = 1; i <= numberOfPages; i++) {
            arr.push(i)
        }
    console.log(userList)
        return (
            <div>
                <h2>User Page</h2>
                {userList.map(el => {
                        return (
                            <div key={el.id} style={{display: 'flex'}}>
                                <NavLink to={'/profile/' + el.id}>
                                    <div>{el.name}</div>
                                </NavLink>
                                <img src={el.photos.small ? el.photos.small : ''} alt=""/>
                                <div>{el.followed}</div>
                            </div>)
                    }
                )
                }
                <div style={{display: 'flex'}}>{arr.map(el => <div key={el} onClick={() => changePage(el)}>{`- ${el} `}</div>)}</div>
                <div>Users per page: {count}</div>
            </div>
        )
    }


