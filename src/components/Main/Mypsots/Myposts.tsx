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
            <Post message="Props are used to store data that can be accessed by the children of a React component.

They are part of the concept of reusability. Props take the place of class attributes and allow you to create consistent interfaces across the component hierarchy.

In this article, we'll learn about props in React. We'll look at what they are and how they work. Then we will look at how props compare to state.

What we'll cover:

    What are props?
    How to declare a prop
    How to use defaultProps
    Props vs state in React"/>
        </div>
    );
}
