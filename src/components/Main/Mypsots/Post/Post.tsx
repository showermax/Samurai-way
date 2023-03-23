import React from "react";
import style from "./Post.module.css"
import picture from "./post.jpg"
import {PostPropsType, PostsListType} from "../../../../types";
import {ForProfileType} from "../../../../redux/state";

export function Post(props: ForProfileType) {
    return (
        <div className={style.item}>
            <div><img src={picture} alt="main picture"/></div>

            <div> <h2>{props.postsList[0].title}</h2> <p>{props.postsList[0].body}</p></div>
            <div>Like</div>
        </div>
    );
}
