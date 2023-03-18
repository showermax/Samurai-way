import React from "react";
import style from "./Post.module.css"
import picture from "./post.jpg"
import {PostPropsType, PostsListType} from "../../../../types";

export function Post(props: PostPropsType) {
    return (
        <div className={style.item}>
            <div><img src={picture} alt="main picture"/></div>

            <div> <h2>{props.posts.title}</h2> <p>{props.posts.body}</p></div>
            <div>Like</div>
        </div>
    );
}
