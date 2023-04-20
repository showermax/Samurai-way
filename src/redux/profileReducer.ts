import React from 'react';
import {ForProfileType} from "./state";

export const ProfileReducer = (state:ForProfileType, action:ProfileActionType) => {
    switch (action.type){
        case 'ADD-POST': return {...state, postsList: [...state.postsList.map(el=>({...el})), {userId: 1, id: 3, title: action.payload.title, body: action.payload.content}]}
    }
};

export type ProfileActionType = AddPostACType
type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (title:string, content:string) => {
    return {
        type: 'ADD-POST',
        payload:{title: title, content: content}
    } as const
}