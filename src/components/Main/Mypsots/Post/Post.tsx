import React from "react";
import style from "./Post.module.css"
import picture from "./post.jpg"
type PostType = {
    text: string
    likes: number
}
export function Post(props: PostType) {
    return (
        <div className={style.item}>
            <div><img src={picture} alt="main picture"/></div>
            <div>{props.text}</div>
            <div>{props.likes}</div>
        </div>
    );
}
