import React from "react";
import {Header} from "./Header";
import axios from "axios";


export class ClassHeader extends React.Component<any, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials: true}).then((resp)=>{
            this.props.getAuthInfo(resp.data.data)})
    }
    render() {
        return <Header {...this.props}/>;
    }
}