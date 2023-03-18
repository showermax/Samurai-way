import React from "react";
//import "./Profile.module.css";
import style from "./Profile.module.css"
import {Myposts} from "../Mypsots/Myposts";
import {ProfileInfo} from "./ProfileInfo";
import {AppPropsType, PostPropsType} from "../../../types";

export function Profile(props: PostPropsType) {
    return (
        <main className={style.main}>
            <ProfileInfo/>
            <Myposts posts={props.posts}/>
        </main>
    );
}
