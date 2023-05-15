import React from 'react';
import {AllActionType, ForProfileType, ProfileInfoType} from "./state";
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
    ],
    profileInfo: {
        aboutMe: "I'm learning to code",
        contacts:{},
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: "Max the Man",
        userId:0,
        photos:{
            small:'',
            large:'',
        }
    }
}
export const ProfileReducer = (state:ForProfileType = initialState, action:AllActionType):ForProfileType => {
    switch (action.type){
        case 'ADD-POST': return {...state, postsList: [...state.postsList.map(el=>({...el})), {userId: 1, id: 3, title: action.payload.title, body: action.payload.content}]}
        case 'GET-INFO': return {...state,profileInfo: action.payload.profileInfo}
        default: return state
    }

};

export type ProfileActionType = AddPostACType | ReturnType<typeof getProfileInfoAC>
type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (title:string, content:string) => {
    return {
        type: 'ADD-POST',
        payload:{title: title, content: content}
    }as const
}
export const getProfileInfoAC = (profileInfo:ProfileInfoType) => {
    return {
        type: 'GET-INFO',
        payload:{profileInfo}
    }as const
}