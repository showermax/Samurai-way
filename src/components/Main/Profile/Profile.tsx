import React from "react";
//import "./Profile.module.css";
import style from "./Profile.module.css"
import {Myposts} from "../Mypsots/Myposts";
import {ProfileInfo} from "./ProfileInfo";
import {AppPropsType, PostPropsType} from "../../../types";
import {ForProfileType, PostsListType} from "../../../redux/state";
type PropsType ={
    postsList: PostsListType[]
    addPost: (t: string, c: string)=> void
    dispatch:any
}
export function Profile(props: PropsType) {
    return (
        <main className={style.main}>
            <ProfileInfo/>
            <Myposts postsList={props.postsList} addPost={props.addPost} dispatch={props.dispatch}/>
        </main>
    );
}
