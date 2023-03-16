import React from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {DialogsType, MessageType} from "../../../App";
import path from "path";
import {Messages} from "./Messages";

type PropsType = {
    messageList: Array<MessageType>,
    dialogList: Array<DialogsType>
}

export function Dialogs(props: PropsType) {
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {props.dialogList.map(el => <div className={style.dialog_item}>
                    <NavLink to={'/dialogs/' + el.name} className={style.activeLink}>{el.name}</NavLink>
                </div>)}
            </div>
            <div className={style.messages}>

                <div>
                    <Routes>
                    <Route path={'/dialogs/Danik'} element = {<Messages messageList={props.messageList}/>} />
                {/*props.messageList.map((el,i)=> <div key={i} className={(el.author==='me') ? style.messages1 : style.messages2}> {el.text}*/}
            </Routes>
                </div>

            </div>
        </div>
    );
}
