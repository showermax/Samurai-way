import React, {ChangeEvent, useRef} from "react";
//import "./Profile.module.css";
import style from "./Dialogs.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppPropsType} from "../../../types";
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

type DialogsPropsType = {
    chatMessages: Array<ChatMessagesType>
    dialogsList: Array<DialogsType>
    dispatch: (action: AllActionType) => void
}

const mapStateToProps = (state: StateType)=>{
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
