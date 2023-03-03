import React from "react";
//import "./Main.module.css";
import style from "./Main.module.css"
export function Main() {
    return (
        <main className={style.main}>
            <div>
                subheader img
            </div>
            <div>
                avatar
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div className={style.item}>post1</div>
                    <div className={style.item}>post2</div>
                    <div className={style.item}>post3</div>
                </div>
            </div>
        </main>
    );
}
