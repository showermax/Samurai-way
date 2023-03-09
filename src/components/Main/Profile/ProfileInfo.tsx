import React from "react";
import style from "./Profile.module.css"
import avatar from "../../../img/ava.jpg"

export function ProfileInfo() {
    return (
        <div>
            <div className={style.header}>
            </div>
            <div className={style.description}>
            <div>
                <img className={style.avatar} src={avatar} alt='avatar'/>
            </div>
            <div>
                <h4> Max the man</h4>
                <p> Age: 36<br/>
                    City: Minsk<br/>
                    Hobby: radio modelling</p>
            </div>
            </div>
        </div>
    );
}