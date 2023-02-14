import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByIdThunkCreator } from "../../../redux/findusersReducer";

const UsersProfile = () => {

  const dispatch = useDispatch()  
  let { userId } = useParams();
  const user = useSelector(state => state.UsersPage.user)
  console.log(user)

  useEffect(() => {
    getUsersByIdThunkCreator(userId)
  }, [userId, dispatch])

  return (
    <div>
        <div>Profile</div>
        {/* {!user.data.photos.large ? <img src='https://klike.net/uploads/posts/2019-03/1551515501_13.jpg' alt=''/> : <img src={user.data.photos.large} alt=''/>}
        <div>{user.data.fullName}</div>  */}
    </div>
  )

}

export default UsersProfile;