import React, {ChangeEvent, useRef} from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppPropsType} from "../../../types";
import {ChatMessagesType, DialogsType, ForDialogsType} from "../../../redux/state";
import Chat from "./Chat";

type DialogsPropsType = {
    chatMessages: Array<ChatMessagesType>
    dialogsList: Array<DialogsType>

    addMessage: (s: string, id: number, author: boolean) => void
}

export function Dialogs(props: DialogsPropsType) {
    const messageField = useRef<HTMLTextAreaElement>(null)
    const sendButtonHandler = (id: number, author: boolean) => {
        props.addMessage(messageField.current!.value, id, author)
        messageField.current!.value = ''
    }
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {props.dialogsList.map(el => <div className={style.dialog_item}>
                    <NavLink to={el.name}>{el.name}</NavLink>
                </div>)}
            </div>
            <div className={style.messages}>
                <div>
                    <Routes>
                        {props.chatMessages.map(el =>
                            <Route path={el.friend} element={
                                <div>
                                    <Chat chat={el.chat} />
                                    <button onClick={() => sendButtonHandler(el.friend_id, false)}> get the answer
                                    </button>
                                    <div className={style.sendForm}>
                                        <textarea ref={messageField} className={style.textarea}
                                                  placeholder={'Type...'}/>
                                        <button onClick={() => sendButtonHandler(el.friend_id, true)}
                                                className={style.button}>Send
                                        </button>
                                    </div>
                                </div>
                            }/>
                        )}
                    </Routes>

                </div>
            </div>
        </div>
    );
}


