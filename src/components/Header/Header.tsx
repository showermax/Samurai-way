import React from "react";
import style from "./Header.module.css"
import logo from "../../logo192.png"
import {AuthType} from "../../redux/loginReducer";

export function Header(props:any) {
    console.log(props)
    return (
        <header className={style.header}>
            <img src={logo}/>
            <div className={style.brand}>Stay in touch</div>
            <div>+++++{props.loginData.email}+++++++</div>

        </header>
    );
}
