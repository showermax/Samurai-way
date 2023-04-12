import React from "react";
//import "./Profile.module.css";
import style from "./Profile.module.css"
import {Myposts} from "../Mypsots/Myposts";
import {ProfileInfo} from "./ProfileInfo";
import {AppPropsType, PostPropsType} from "../../../types";
import {DispatchType, ForProfileType, PostsListType} from "../../../redux/state";
type PropsType ={
    postsList: PostsListType[]
    dispatch:DispatchType
}
export function Profile(props: PropsType) {
    return (
        <main className={style.main}>
            <ProfileInfo/>
            <Myposts postsList={props.postsList} dispatch={props.dispatch}/>
        </main>
    );
}
