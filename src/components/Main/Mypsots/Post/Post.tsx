import React from "react";
//import "./Main.module.css";
import style from "./Post.module.css"
type PostType = {
    message: string
}
export function Post(props: PostType) {
    return (
        <div>
            <div className={style.item}><img src="https://i.pinimg.com/originals/d3/ca/84/d3ca841ef0f604041f9fa07702297954.jpg" alt="main picture"/>post1</div>
            <div>Like</div>
            <div>{props.message}</div>
        </div>
    );
}
