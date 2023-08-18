import React from 'react';
import {authApi} from "../DAL/api/api";
import {Dispatch} from "redux";

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

export const getAuthInfoTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.getAuthInfo()
        dispatch(getAuthInfoAC(res.data.data))
    }
    catch (e) {

    }
}