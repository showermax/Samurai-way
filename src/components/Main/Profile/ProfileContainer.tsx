import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/reduxStore";
import {PostsListType, ProfileInfoType} from "../../../redux/state";
import {getProfileInfoAC, getProfileTC} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";


const withRouter = (WrappedComponent:any) => (props:any) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};
type ProfileClassPropsType = {
    getProfile: (id:number) => void,
    getProfileInfo: (profileInfo: ProfileInfoType) => void,
    postsList: PostsListType[],
    profileInfo: ProfileInfoType
}

class ProfileClass extends React.Component<any, any>{

    componentDidMount() {

        let userId = this.props.params.userId
        this.props.getProfile(userId)
        // let userId = this.props.params.userId
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((resp)=>{
        //     this.props.getProfileInfo(resp.data)})
    }
    render() {
        return <Profile profileInfo = {this.props.profileInfo}/>
    }
}




const mapStateToProps = (state:ReduxStateType)=>{
   return {
       postLists: state.forProfile.postsList,
       profileInfo: state.forProfile.profileInfo
   }
}
const mapDispatchToProps = (dispatch: (action:any)=>void) =>{
    return {
        getProfileInfo: (profileInfo: ProfileInfoType) => {
            dispatch(getProfileInfoAC(profileInfo))
        },
        getProfile: (id:number) => {
            dispatch(getProfileTC(id))
        }
    }

}
const WithRouteProfileClass = withRouter(ProfileClass)
export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(WithRouteProfileClass)