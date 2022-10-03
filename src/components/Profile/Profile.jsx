import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  console.log(props)
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>
      </div>
    )
}

export default Profile;