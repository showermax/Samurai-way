import React from 'react';

export type UsersStateType = {
    users: Array<UserType>,
    friends: Array<number>
}
export type UserType = {
    id:number,
    name:string,
    photo:{small: string | null, large: string | null },
    status:string | null,
    followed: boolean
}
const InitialState:UsersStateType = {
    users: [
        {id: 1, name: 'Danik', photo: {small: null, large: null}, status: null, followed: false},
        {id: 2, name: 'Kirill', photo: {small: null, large: null}, status: null, followed: false},
        {id: 3, name: 'Ivan', photo: {small: null, large: null}, status: null, followed: false},
        {id: 4, name: 'Denis', photo: {small: null, large: null}, status: null, followed: false}
    ],
    friends: [1,2,3]
}
export const UsersReducer = (state:UsersStateType = InitialState, action: ActionType): UsersStateType  => {
    switch (action.type) {
        case 'ADD-USER': {
            console.log(state.users)
            return {...state, users: [...state.users, action.payload.newUser]}
        }
        case 'FOLLOW-USER': {
            return state
        }
        default:
            return state
    }
};
type ActionType = ReturnType<typeof addUserAC> | ReturnType<typeof followUserAC>
export const addUserAC = ()=>{
    return {
        type: 'ADD-USER',
        payload: {newUser:{id: 5, name: 'Demian', photo: {small: null, large: null}, status: null, followed: false} }
    } as const
}

const followUserAC = ()=>{
    return {
        type: 'FOLLOW-USER',
        payload: {}
    } as const
}