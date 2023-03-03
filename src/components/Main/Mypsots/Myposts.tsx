import React from "react";
//import "./Main.module.css";
import style from "./Myposts.module.css"
import {Post} from "./Post/Post";

export function Myposts() {
    return (
        <div>
            my post
            <div>
                new post
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}
