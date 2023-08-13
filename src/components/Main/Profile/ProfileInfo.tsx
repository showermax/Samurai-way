import React from "react";
import style from "./Profile.module.css"
import avatar from "../../../assets/img/user-profile-icon.png"
import {ProfileInfoType} from "../../../redux/state";

type PropsType = {
    profileInfo: ProfileInfoType
}
export function ProfileInfo({profileInfo}:PropsType) {
    console.log(profileInfo)
    const contacts = []
    for (const contactsKey in profileInfo.contacts) {
        contacts.push(`${contactsKey}: ${profileInfo.contacts[contactsKey] ? profileInfo.contacts[contactsKey] : ''}`)
    }
    return (
        <div>
            <div className={style.header}>
            </div>
            <div className={style.description}>
            <div>
                <img className={style.avatar} src={profileInfo.photos.small || avatar} alt='avatar'/>
            </div>
            <div>
                <h2> {profileInfo.fullName}</h2>
                <h3> {profileInfo.aboutMe}</h3>
                {profileInfo.lookingForAJob ?
                    <>
                        <div>I'm looking for a job</div>
                        <div>{profileInfo.lookingForAJobDescription}</div>
                    </>
                    :
                    <div>I have got a job already or just don't need it</div>
                }
                <h3> My contacts: <br/>
                    {
                        contacts.map(el=><> {el}<br/></>)
                    }
                </h3>
            </div>
            </div>
        </div>
    );
}