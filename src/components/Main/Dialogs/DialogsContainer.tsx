import React, {ChangeEvent, useRef} from "react";

import {
    AllActionType,
    ChatMessagesType,
    DialogsType,
    ForDialogsType, StateType
} from "../../../redux/state";
import Chat from "./Chat";
import {addMessageAC} from "../../../redux/chatReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {ReduxStateType} from "../../../redux/reduxStore";
//
// type DialogsPropsType = {
//     chatMessages: Array<ChatMessagesType>
//     dialogsList: Array<DialogsType>
//     dispatch: (action: AllActionType) => void
// }

const mapStateToProps = (state: ReduxStateType)=>{
    return {
        chatMessages: state.forDialogs.chatMessages,
        dialogsList: state.forDialogs.dialogsList
    }
}
const mapDispatchToProps = (dispatch: (action: AllActionType) => void)=>{
    return {
         sendMessage: (message:string,id:number,author:boolean)=>{
             dispatch(addMessageAC(message,id,author))
         }
    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
