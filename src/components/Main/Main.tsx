import React from "react";
//import "./Main.module.css";
import style from "../Main/Main.module.css"
import {Myposts} from "./Mypsots/Myposts";

export function Main() {
    return (
        <main className={style.main}>
            <div>
                subheader img
            </div>
            <div>
                avatar
            </div>
            <Myposts/>
        </main>
    );
}
