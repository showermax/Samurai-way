import React from "react";
import style from "./Navbar.module.css"
export function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={style.item}>
                <a href='/messages'>Messages</a>
            </div>
            <div className={style.item}>
                <a href='/news'> News</a>
            </div>
            <div className={style.item}>
                <a href='/music'> Music</a>
            </div>
            <div className={style.item}>
                <a href='/settings'> Settings</a>
            </div>
        </nav>
    );
}
