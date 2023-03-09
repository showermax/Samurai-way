import React from "react";
//import "./Profile.module.css";
import style from "./Profile.module.css"
import {Myposts} from "../Mypsots/Myposts";
import {ProfileInfo} from "./ProfileInfo";

export function Profile() {
    return (
        <main className={style.main}>
            <ProfileInfo/>
            <Myposts/>
        </main>
    );
}
