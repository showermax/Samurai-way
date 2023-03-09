import React from "react";
//import "./Profile.module.css";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";

export function Myposts() {
    return (
        <div>
            my post
            <div>
                new post
            </div>
            <Post message="The number one post"/>
            <Post message="The second post"/>
            <Post message="The post number three"/>
        </div>
    );
}
