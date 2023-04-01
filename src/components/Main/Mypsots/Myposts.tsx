import React, {useRef} from "react";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";
import {PostPropsType, PostsListType} from "../../../types";
import {ForProfileType} from "../../../redux/state";

type PropsType ={
    postsList: PostsListType[]
    addPost: (t: string, c: string)=> void
}
export function Myposts(props: PropsType) {
    const textAreaTitle = useRef<HTMLTextAreaElement>(null)
    const textAreaBody = useRef<HTMLTextAreaElement>(null)
    const addPostHandler = () =>{
        props.addPost(textAreaTitle.current!.value, textAreaBody.current!.value)
    }
    return (
        <div className={style.wrapper}>
            <div>
                <textarea ref={textAreaTitle} className={style.textareaTitle} placeholder={'type the title'}> </textarea>
            </div>
            <div>
                <textarea ref={textAreaBody} className={style.textarea} placeholder={'type the post'}> </textarea>
            </div>
            <button onClick={addPostHandler}> Public the post </button>
            <Post postsList={props.postsList}/>
        </div>
    );
}
