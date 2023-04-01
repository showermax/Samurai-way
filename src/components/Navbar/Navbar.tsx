import React, {useState} from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {
    let [opacity, setOpacity]=useState (false)
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.activeLink}><div onMouseOver={()=>{setOpacity(true)}} onMouseLeave={()=>{setOpacity(false)}} className={style.nav_ico}>P</div>{opacity && <div className={style.tip}>Profile</div>}</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.activeLink}> News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.activeLink}> Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.activeLink}> Settings</NavLink>
            </div>
        </nav>
    );
}
