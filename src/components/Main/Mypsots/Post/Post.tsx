import React from "react";
import style from "./Post.module.css"
import picture from "./post.jpg"
import {PostPropsType, PostsListType} from "../../../../types";
import {ForProfileType} from "../../../../redux/state";
type PropsType ={
    postsList: PostsListType[]
}
export function Post(props: PropsType) {

    return (
        <>
            {props.postsList.map(el => {
                return (
                    <div className={style.item}>
                        <div><img src={picture} alt="main picture"/></div>
                        <div>
                            <h2>{el.title}</h2>
                            <p>{el.body}</p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
