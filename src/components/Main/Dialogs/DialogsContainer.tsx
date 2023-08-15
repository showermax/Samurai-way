import React, {ChangeEvent, useRef} from "react";

import {
    AllActionType,
    ChatMessagesType,
    DialogsType,
    ForDialogsType, StateType
} from "../../../redux/state";
import Chat from "./Chat";
import {addMessageAC, getFriends} from "../../../redux/chatReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {ReduxStateType} from "../../../redux/reduxStore";
//
// type DialogsPropsType = {
//     chatMessages: Array<ChatMessagesType>
//     dialogsList: Array<DialogsType>
//     dispatch: (action: AllActionType) => void
// }
class DialogsClass extends React.Component<any, any> {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        return <Dialogs dialogsList = {this.props.dialogsList} chatMessages = {this.props.chatMessages} sendMessage = {this.props.sendMessage}/>;
    }
}
const mapStateToProps = (state: ReduxStateType)=>{
    return {
        chatMessages: state.forDialogs.chatMessages,
        dialogsList: state.forDialogs.dialogsList
    }
}
const mapDispatchToProps = (dispatch: (action: any) => void)=>{
    return {
         sendMessage: (message:string,id:number,author:boolean)=>{
             dispatch(addMessageAC(message,id,author))
         },
        getFriends: ()=>{
             dispatch(getFriends())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsClass)
