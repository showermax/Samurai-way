import React from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppPropsType} from "../../../types";

type DialogsType = {
    id: number
    name: string
}

export function Dialogs(props: AppPropsType) {

    const dialogsList: Array<DialogsType> = [
        {id: 1, name: 'Danik'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Denis'},
        {id: 5, name: 'Andrei'},
        {id: 6, name: 'Demiyan'},
        {id: 7, name: 'Arsenyi'}
    ]

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsList.map(el => <div className={style.dialog_item}>
                    <NavLink to={'/dialogs/' + el.name} activeClassName={style.activeLink}>{el.name}</NavLink>
                </div>)}
            </div>
            <div className={style.messages}>
                <div>
                    <Route path='/dialogs/Danik'>{props.dialog[0].chat.map(el=><div className={el.author? style.messages1: style.messages2}>{el.text}</div>)}</Route>
                    <Route path='/dialogs/Kirill'>{props.dialog[1].chat.map(el=><div className={el.author? style.messages1: style.messages2}>{el.text}</div>)}</Route>
                </div>
            </div>
        </div>
    );
}
