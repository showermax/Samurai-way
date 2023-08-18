import React from "react";
import {Header} from "./Header";
import axios from "axios";


export class ClassHeader extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthInfo()
    }
    render() {
        return <Header {...this.props}/>;
    }
}