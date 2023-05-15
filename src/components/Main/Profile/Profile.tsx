import React from 'react';
import style from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo";
import {MypostsContainer} from "../Mypsots/MypostsContainer";
import {ProfileInfoType} from "../../../redux/state";
type PropsType = {
    profileInfo: ProfileInfoType
}
export const Profile = (props:PropsType) => {
    return (
        <main className={style.main}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MypostsContainer />
            {/*<MypostsContainer postsList={props.postsList} dispatch={props.dispatch}/>*/}
        </main>
    );
};

export default Profile;