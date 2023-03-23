import React from "react";
//import "./Profile.module.css";
import style from "./Profile.module.css"
import {Myposts} from "../Mypsots/Myposts";
import {ProfileInfo} from "./ProfileInfo";
import {AppPropsType, PostPropsType} from "../../../types";
import {ForProfileType, PostsListType} from "../../../redux/state";

export function Profile(props: ForProfileType) {
    return (
        <main className={style.main}>
            <ProfileInfo/>

            <Myposts postsList={props.postsList}/>
        </main>
    );
}
