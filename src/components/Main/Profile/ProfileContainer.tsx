import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduxStateType} from "../../../redux/reduxStore";
import {ProfileInfoType} from "../../../redux/state";
import {getProfileInfoAC} from "../../../redux/profileReducer";
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
class ProfileClass extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((resp)=>{
            this.props.getProfileInfo(resp.data)})
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
const mapDispatchToProps = (dispatch: Dispatch)=>{
    return{
        getProfileInfo: (profileInfo: ProfileInfoType) => {
            dispatch(getProfileInfoAC(profileInfo))
        }
    }

}
const WithRouteProfileClass = withRouter(ProfileClass)
export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(WithRouteProfileClass)