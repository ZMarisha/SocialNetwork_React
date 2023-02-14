import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostContainer.jsx';


const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
        <MyPostsContainer state={props.state} />
      </div>
    )
}

export default Profile;