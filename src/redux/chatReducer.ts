import React from 'react';
import {AllActionType, ForDialogsType} from "./state";
import {Dispatch} from "redux";
import {usersApi} from "../DAL/api/api";

let initialState:ForDialogsType = {
        chatMessages: [
            {
                friend_id: 1,
                friend: 'Danik',
                chat: [
                    {id: 1, text: 'wanna go for a walk?', author: true},
                    {id: 2, text: 'yeah, great', author: false},
                    {id: 3, text: 'so tired sitting at home', author: false},
                    {id: 4, text: 'I\'ll be ready in 15 minutes', author: true}
                ]
            },
            {
                friend_id: 2,
                friend: 'Kirill',
                chat: [
                    {id: 1, text: 'hey!', author: true},
                    {id: 2, text: 'hi, how\'s it going?', author: false},
                    {id: 3, text: 'okay, are you at home?', author: true},
                    {id: 4, text: 'yeah, chilling ... you?', author: false}
                ]
            }
        ],
        dialogsList: [
            {id: 1, name: 'Danik'},
            {id: 2, name: 'Kirill'},
            {id: 3, name: 'Ivan'},
            {id: 4, name: 'Denis'},
            {id: 5, name: 'Andrei'},
            {id: 6, name: 'Demiyan'},
            {id: 7, name: 'Arsenyi'}
        ]

    }
export const ChatReducer = (state: ForDialogsType = initialState, action: AllActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newChatMessages = state.chatMessages.map(el => el.friend_id === action.payload.id ? {
                ...el,
                chat: [...el.chat, {
                    id: el.chat.length + 1,
                    text: action.payload.newmessage,
                    author: action.payload.author
                }]
            } : el)
            return {...state, chatMessages: newChatMessages}
        }
        default: return state

    }
};
export type ChatActionType = AddMessageACType

type AddMessageACType = ReturnType<typeof addMessageAC>
//     {
//     type: 'ADD-MESSAGE',
//     payload: {
//         newmessage: string,
//         id:number,
//         author: boolean
//     }
// }
export const addMessageAC = (newmessage: string, id: number,  author: boolean) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {
            newmessage, id,  author
        }
    } as const
}

export const getFriends = () => async (dispatch: Dispatch) => {
    try {
        const res = await usersApi.getUsers(1,100)
        const friends = res.data.items.filter(el=>el.followed)
        console.log(friends)
    }
    catch{

    }
}
