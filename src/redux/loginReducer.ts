import React from 'react';

export type AuthType = {
    id: number | undefined
    login: string | undefined
    email: string | undefined
}
const InitialState = {
    id: 0,
    login: '',
    email: ''
}
export const LoginReducer = (state: AuthType = InitialState, action: ActionType) => {
    switch (action.type) {
        case "AUTHORIZATION": return {...state,...action.payload}
        default: return state
    }
};

type ActionType = ReturnType<typeof getAuthInfoAC>
export const getAuthInfoAC = (data: AuthType) => {
    return{
        type: 'AUTHORIZATION',
        payload: data
    } as const
}