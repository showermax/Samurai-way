import React from "react";
//import "./Profile.module.css";
import style from "./Profile.module.css"
import {Myposts} from "../Mypsots/Myposts";
import {ProfileInfo} from "./ProfileInfo";
import {AppPropsType, PostPropsType} from "../../../types";
import {AllActionType, PostsListType} from "../../../redux/state";
import { MypostsContainer } from "../Mypsots/MypostsContainer";
// type PropsType ={
//     postsList: PostsListType[]
//     dispatch:(action: AllActionType) => void
// }
export function Profile() {
    return (
        <main className={style.main}>
            <ProfileInfo/>
            <MypostsContainer />
            {/*<MypostsContainer postsList={props.postsList} dispatch={props.dispatch}/>*/}
        </main>
    );
}
