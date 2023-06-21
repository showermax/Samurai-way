import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";
import {NavLink} from "react-router-dom";
import s from './Users.module.css';


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
        return (
            <div>
                <h2>Users Page</h2>
                <div className={s.grid}>{userList.map(el => {
                        return (
                            // className={el.photos.small ? s.item__photo : s.item}
                            <div key={el.id}  style={el.photos.small ? {
                                width: '200px',
                                height: '300px',
                                background: `linear-gradient(180deg, rgba(41, 47, 63, 0.3) 0%, rgba(41, 47, 63, 0.9) 100%), url(${el.photos.large}) 0 0 no-repeat`,
                                boxShadow: '20px 24px 34px rgba(0, 0, 0, 0.45)',
                                borderRadius: '30px'
                            } : {

                                }}>
                                <NavLink to={'/profile/' + el.id}>
                                    {/*<img src={el.photos.large ? el.photos.large : ''} alt=""/>*/}
                                    <div>{el.name}</div>
                                </NavLink>

                                <div>{el.followed}</div>
                            </div>)
                    }
                )
                }</div>
                <div style={{display: 'flex'}}>{arr.map(el => <div key={el} onClick={() => changePage(el)}>{`- ${el} `}</div>)}</div>
                <div>Users per page: {count}</div>
            </div>
        )
    }


