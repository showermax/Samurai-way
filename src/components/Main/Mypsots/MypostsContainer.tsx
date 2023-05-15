import React, {useRef} from "react";
import {AllActionType, StateType} from "../../../redux/state";
import {addPostAC} from "../../../redux/profileReducer";
import { Myposts } from "./Myposts";
import {connect} from "react-redux";

// type PropsType ={
//     postsList: PostsListType[]
//     dispatch:(action: AllActionType) => void
// }
// export function MypostsContainer(props: PropsType) {
//     const addPostHandler = (title: string, body:string) =>{
//         props.dispatch(addPostAC(title,body))
//     }
//     return (
//         <div className={style.wrapper}>
//             <Myposts postsList={props.postsList} addPost={addPostHandler}/>
//         </div>
//     );
// }


const mapStateToProps = (state:StateType) => {
    return {
        postsList: state.forProfile.postsList
    }
}
const mapDispatchToProps = (dispatch: (action: AllActionType) => void) => {
    return {
        addPost: (title:string,body:string)=> dispatch(addPostAC(title,body))
    }
}

export const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts)
