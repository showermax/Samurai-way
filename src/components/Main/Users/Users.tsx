import React, {useEffect} from 'react';
import {UserType} from "../../../redux/usersReducer";
import axios from "axios";
import {NavLink} from "react-router-dom";
import s from './Users.module.css';
import favouriteRed from './favorite-red.png'
import favouriteEmpty from './favorite-empty.png'


type UsersPropsType = {
    userList: UserType[],
    count: number
    page: number
    totalCount: number
    changePage: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFollowingArr: Array<number>
}

export const Users: React.FC<UsersPropsType> = ({totalCount, count, userList, changePage, page, follow, unfollow, isFollowingArr}) => {
    let arr = []
    let k = totalCount / 100
    let numberOfPages = Math.ceil(k / count)
    for (let i = 1; i <= numberOfPages; i++) {
        arr.push(i)
    }
    return (
        <div>
            <div className={s.grid}>{userList.map(el => {
                    let styleNumber = Math.floor(Math.random() * 2)
                const followHandler = () => {
                    el.followed ?  unfollow(el.id) : follow(el.id)
                }
                    return (
                        <div key={el.id} className={el.followed ? s.item : styleNumber === 1 ? s.item1 : s.item2}>

                            <NavLink to={'/profile/' + el.id}>
                                <img className={s.img} src={el.photos.large ? el.photos.large : ''} alt=""/>
                                <div className={s.userName}>{el.name}</div>
                            </NavLink>
                            <div className={`${s.followed} ${isFollowingArr.includes(el.id) ? s.disabled :null}`} onClick={followHandler}><img src = {el.followed ? favouriteRed : favouriteEmpty}/></div>
                        </div>)
                }
            )
            }</div>
            <div className={s.pagination}>
                {arr.map(el =>
                    <div key={el} className={el!==page ? s.paginationItem:`${s.paginationItem} ${s.activePage}`} onClick={() => changePage(el)}>{el}</div>)}
            </div>
            <div>Users per page: {count}</div>
        </div>
    )
}


