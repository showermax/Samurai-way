import React from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route} from "react-router-dom";
import {Profile} from "../Profile/Profile";

type DialogsType = {
    id: number
    name: string
}

export function Dialogs() {
    type DialogsType = {
        id: number
        name: string
    }
    const dialogsList: Array<DialogsType> = [
        {id: 1, name: 'Danik'},
        {id: 1, name: 'Kirill'},
        {id: 1, name: 'Ivan'},
        {id: 1, name: 'Denis'},
        {id: 1, name: 'Andrei'},
        {id: 1, name: 'Demiyan'},
        {id: 1, name: 'Arsenyi'}
    ]
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsList.map(el => <div className={style.dialog_item}><NavLink to={'/dialogs/' + el.name}
                                                                                   activeClassName={style.activeLink}>{el.name}</NavLink>
                </div>)}
            </div>
            <div className={style.messages}>
                <div className={style.messages1}>
                    <Route path='/dialogs/Danik'><Profile /></Route>
                </div>

                <div className={style.messages2}>hey</div>
                <div className={style.messages1}>how's it going</div>
                <div className={style.messages1}>home?</div>
                <div className={style.messages2}>yeah, chilling .. you?</div>
            </div>
        </div>
    );
}
