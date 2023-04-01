import React from "react";
import style from "./Header.module.css"
import logo from "../../logo192.png"

export function Header() {
    return (
        <header className={style.header}>
            <img src={logo}/>
            <div className={style.brand}>Stay in touch</div>
        </header>
    );
}
