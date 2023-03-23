import React from "react";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";
import {PostPropsType, PostsListType} from "../../../types";
import {ForProfileType} from "../../../redux/state";

export function Myposts(props: ForProfileType) {

    return (
        <div className={style.wrapper}>
            <div>
                <textarea className={style.textarea}> </textarea>
            </div>
            <button> Public the post </button>
            <Post postsList={props.postsList}/>
        </div>
    );
}
