import React, {useRef} from "react";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";
import {PostPropsType, PostsListType} from "../../../types";
import {AllActionType, ForProfileType} from "../../../redux/state";
import {addPostAC} from "../../../redux/profileReducer";
import { Myposts } from "./Myposts";

type PropsType ={
    postsList: PostsListType[]
    dispatch:(action: AllActionType) => void
}
export function MypostsContainer(props: PropsType) {
    const addPostHandler = (title: string, body:string) =>{
        props.dispatch(addPostAC(title,body))
    }
    return (
        <div className={style.wrapper}>
            <Myposts postsList={props.postsList} addPost={addPostHandler}/>

        </div>
    );
}
