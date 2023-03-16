import React, {ChangeEvent, useState} from "react";
import {v1} from "uuid";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";

export function Myposts() {
    const [posts, setposts] = useState(
        [
            {
                id: v1(),
                text: "Props are used to store data that can be accessed by the children of a React component. " +
                    "They are part of the concept of reusability. " +
                    "Props take the place of class attributes and allow you to create " +
                    "consistent interfaces across the component hierarchy." +
                    "In this article, we'll learn about props in React. " +
                    "We'll look at what they are and how they work. " +
                    "Then we will look at how props compare to state.",
                likesCount: 10
            },
            {
                id: v1(),
                text: 'A callback function is a function passed into another function as an argument, ' +
                    'which is then invoked inside the outer function to complete some kind of routine or action.',
                likesCount: 3
            }
        ]
    )
    const [textareaContent, settextareaContent] = useState('')
    const onchangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => settextareaContent(e.currentTarget.value)
    const onClickButtonHandler = () => {
        let newPost = {id: v1(), text: textareaContent, likesCount: 0}
        setposts([newPost, ...posts])
        settextareaContent('')
    }
    const publishedPost = posts.map(el => <Post text={el.text} likes={el.likesCount}/>)
    return (
        <div className={style.wrapper}>
            <div>
                <textarea className={style.textarea} onChange={onchangeTextarea}> </textarea>
            </div>
            <button onClick={onClickButtonHandler}> Public the post</button>
            {publishedPost}
        </div>
    )
}