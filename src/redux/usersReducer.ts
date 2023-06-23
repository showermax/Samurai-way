import React from 'react';

export type UsersStateType = {
    users: Array<UserType>
    friends: Array<number>
    count: number
    page: number
    totalCount: number
    isLoading:boolean
}
export type UserType = {
    id:number
    name:string
    photos:{small: string | null, large: string | null }
    status:string | null
    followed: boolean
    uniqueUrlName: string | null
}
const InitialState:UsersStateType = {
    users: [
        {id: 1, name: 'Danik', photos: {small: null, large: null}, status: null, followed: false,uniqueUrlName:null},
        {id: 2, name: 'Kirill', photos: {small: null, large: null}, status: null, followed: false,uniqueUrlName:null},
        {id: 3, name: 'Ivan', photos: {small: null, large: null}, status: null, followed: false,uniqueUrlName:null},
        {id: 4, name: 'Denis', photos: {small: null, large: null}, status: null, followed: false,uniqueUrlName:null}
    ],
    count: 10,
    page:1,
    totalCount:27,
    friends: [1,2,3],
    isLoading:true
}
export const UsersReducer = (state:UsersStateType = InitialState, action: ActionType): UsersStateType  => {
    switch (action.type) {
        case 'ADD-USER': {
            return {...state, users: [...state.users, action.payload.newUser]}
        }
        case 'FOLLOW-USER': {
            return {...state, users: state.users.map(el => el.id === action.payload.id ? {...el, followed: !el.followed} : el)}
        }
        case 'GET-USERS': {
            return {...state, users: action.payload.users}
        }
        case 'SET-PAGE': {
            return {...state, page: action.payload.page}
        }
        case 'SET-USERS-COUNT': {
            return {...state, totalCount: action.payload.totalCount}
        }
        case 'IS-LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
};
type ActionType = ReturnType<typeof addUserAC> | ReturnType<typeof followUserAC>
    | ReturnType<typeof getUsersAC> | ReturnType<typeof setPageAC>
    | ReturnType<typeof setUsersCountAC> | ReturnType<typeof setIsLoadingAC>
export const addUserAC = ()=>{
    return {
        type: 'ADD-USER',
        payload: {newUser:{id: 5, name: 'Demian', photos: {small: null, large: null}, status: null, followed: false,uniqueUrlName:null} }
    } as const
}

export const followUserAC = (id:number)=>{
    return {
        type: 'FOLLOW-USER',
        payload: {id}
    } as const
}
export const getUsersAC = (users: UserType[])=>{
    return {
        type: 'GET-USERS',
        payload: {users}
    } as const
}

export const setPageAC = (page: number)=>{
    return {
        type: 'SET-PAGE',
        payload: {page}
    } as const
}
export const setUsersCountAC = (totalCount: number)=>{
    return {
        type: 'SET-USERS-COUNT',
        payload: {totalCount}
    } as const
}
export const setIsLoadingAC = (isLoading: boolean)=>{
    return {
        type: 'IS-LOADING',
        payload:{isLoading}
    } as const
}