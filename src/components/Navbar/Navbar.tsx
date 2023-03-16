import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {



    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={style.activeLink}> News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={style.activeLink}> Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={style.activeLink}> Settings</NavLink>
            </div>
        </nav>
    );
}
