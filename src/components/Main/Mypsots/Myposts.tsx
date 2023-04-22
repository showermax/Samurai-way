import React, {useRef} from "react";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";
import {PostPropsType, PostsListType} from "../../../types";
import {AllActionType, ForProfileType} from "../../../redux/state";
import {addPostAC} from "../../../redux/profileReducer";

type PropsType ={
    postsList: PostsListType[]
    dispatch:(action: AllActionType) => void
}
export function Myposts(props: PropsType) {
    const textAreaTitle = useRef<HTMLTextAreaElement>(null)
    const textAreaBody = useRef<HTMLTextAreaElement>(null)
    const addPostHandler = () =>{
        //props.addPost(textAreaTitle.current!.value, textAreaBody.current!.value)
        // props.dispatch({type: 'ADD-POST', payload: {title: textAreaTitle.current!.value, content: textAreaBody.current!.value}})
        props.dispatch(addPostAC(textAreaTitle.current!.value,textAreaBody.current!.value))
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
