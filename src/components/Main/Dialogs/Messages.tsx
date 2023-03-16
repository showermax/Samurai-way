import React from "react";
import style from "./Dialogs.module.css"
import {DialogsType, MessageType} from "../../../App";
type PropsType = {
    messageList: Array<MessageType>
}
export function Messages(props: PropsType) {
    return (
        <div>
        {props.messageList.map((el,i)=> <div key={i} className={(el.author==='me') ? style.messages1 : style.messages2}> {el.text}</div>)}
        </div>            )
}