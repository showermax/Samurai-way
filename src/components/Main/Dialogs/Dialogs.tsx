import React, {ChangeEvent, useRef} from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppPropsType} from "../../../types";
import {ChatMessagesType, DialogsType, ForDialogsType} from "../../../redux/state";

type DialogsPropsType ={
    chatMessages: Array<ChatMessagesType>
    dialogsList: Array<DialogsType>

    addMessage: (s: string)=> void
}
export function Dialogs(props: DialogsPropsType) {
    const messageField = useRef<HTMLTextAreaElement>(null)
    const sendButtonHandler = () =>
        props.addMessage(messageField.current!.value)
    const chatRender =
        props.chatMessages.map(el =>
            <Route path={'/dialogs/'+el.friend}>
                {el.chat.map(el2=><div className={el2.author? style.messages1: style.messages2}>{el2.text}</div>)}
                <textarea ref={messageField}>type...</textarea><button onClick={sendButtonHandler}>Send</button>
            </Route> )

    const textareaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        //props.setNewMessages(e.currentTarget.value)
    }

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
