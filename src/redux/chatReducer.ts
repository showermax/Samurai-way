import React from 'react';
import {AllActionType, ForDialogsType} from "./state";

export const ChatReducer = (state: ForDialogsType, action: AllActionType) => {
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

