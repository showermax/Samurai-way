import React, {useRef} from 'react';
import {ChatType} from "../../../redux/state";
import style from "./Dialogs.module.css"
type PropsType ={
    chat: ChatType[]
}
export  const Chat = (props: PropsType) => {


    return (
        <div>
            {props.chat.map(el2 => <div className={el2.author ? style.messages1 : style.messages2}>{el2.text}</div>)}

        </div>
    );
};

export default Chat;