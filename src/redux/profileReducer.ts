import React from 'react';
import {AllActionType, ForProfileType} from "./state";
const initialState: ForProfileType = {
    postsList: [
        {
            userId: 1,
            id: 1,
            title: "First post title",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "Second post title",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ]
}
export const ProfileReducer = (state:ForProfileType = initialState, action:AllActionType):ForProfileType => {
    switch (action.type){
        case 'ADD-POST': return {...state, postsList: [...state.postsList.map(el=>({...el})), {userId: 1, id: 3, title: action.payload.title, body: action.payload.content}]}
        default: return state
    }

};

export type ProfileActionType = AddPostACType
type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (title:string, content:string) => {
    return {
        type: 'ADD-POST',
        payload:{title: title, content: content}
    }as const
}