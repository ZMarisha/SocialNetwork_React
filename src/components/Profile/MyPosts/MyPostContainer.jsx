import { connect } from 'react-redux';
import { addNewPostCreator, updateNewTextCreator } from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts.jsx';


let mapStateToProps = (state)=> {
    return {
        postsData: state.ProfilePage.POSTS,
        updateText: state.ProfilePage.updateText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addNewPostCreator())
        },
        updateNewText (text) {
            dispatch(updateNewTextCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;