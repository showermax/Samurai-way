import React from "react";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";

export function Myposts() {
    return (
        <div className={style.wrapper}>
            <div>
                <textarea className={style.textarea}> </textarea>
            </div>
            <button> Public the post </button>

            <Post message="The number one post"/>
            <Post message="The second post"/>
            <Post message="The post number three"/>
        </div>
    );
}
