import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.POSTS} 
                dispatch={props.dispatch} 
                updateText={props.profilePage.updateText} 
                updateNewTextCreator={props.updateNewTextCreator} 
                addNewPostCreator={props.addNewPostCreator} />
      </div>
    )
}

export default Profile;