import React from "react";
import style from "./Post.module.css"
import picture from "./post.jpg"
import {PostPropsType, PostsListType} from "../../../../types";

export function Post(props: PostsListType[]) {
    return (
        <div className={style.item}>
            <div><img src={picture} alt="main picture"/></div>

            <div> <h2>{props[0].title}</h2> <p>{props[1].body}</p></div>
            <div>Like</div>
        </div>
    );
}
