import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {ReduxStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {AuthType, getAuthInfoAC, getAuthInfoTC} from "../../redux/loginReducer";
import {ClassHeader} from "./ClassHeader";

const mapStateToProps = (state: ReduxStateType) => {
    return {loginData: state.loginData}
};
const mapDispatchToProps = (dispatch: (action:any)=>void) => {
    return {getAuthInfo:()=> dispatch(getAuthInfoTC())}
    // return {getAuthInfo:(loginData: AuthType)=> dispatch(getAuthInfoAC(loginData))}
}
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(ClassHeader)