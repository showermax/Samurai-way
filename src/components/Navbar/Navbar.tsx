import React, {useState} from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={({isActive}) =>
                    isActive ? style.active : style.pending
                }
                >
                    Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={({isActive}) =>
                    isActive ? style.active : style.pending
                }
                >
                    Chatrooms
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' className={({isActive}) =>
                    isActive ? style.active : style.pending
                }
                >
                    Users
                </NavLink>
            </div>


        </nav>
    );
}
