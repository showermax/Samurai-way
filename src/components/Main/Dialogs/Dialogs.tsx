import React from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppPropsType} from "../../../types";
import {ForDialogsType} from "../../../redux/state";

export function Dialogs(props: ForDialogsType) {

    const chatRender =
        props.chatMessages.map(el =>
            <Route path={'/dialogs/'+el.friend}>
                {el.chat.map(el2=><div className={el2.author? style.messages1: style.messages2}>{el2.text}</div>)}
            </Route> )

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {props.dialogsList.map(el => <div className={style.dialog_item}>
                    <NavLink to={'/dialogs/' + el.name} activeClassName={style.activeLink}>{el.name}</NavLink>
                </div>)}
            </div>
            <div className={style.messages}>
                <div>
                    {chatRender}
                </div>
            </div>
        </div>
    );
}
