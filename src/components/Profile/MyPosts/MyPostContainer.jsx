import { connect } from 'react-redux';
import { addNewPostCreator, updateNewTextCreator } from '../../redux/profileReducer.js';
import MyPosts from './MyPosts.jsx';

// const MyPostsContainer = (props) => {
//     const postsData = props.state.ProfilePage.POSTS
//     const updateText = props.state.ProfilePage.updateText

//     let addPost = () => {
//         props.store.dispatch(addNewPostCreator())
//     }

//     let updateNewText = (text) => {
//         props.store.dispatch(updateNewTextCreator(text))
//     }

//     return <MyPosts addPost={addPost} postsData={postsData} updateNewText={updateNewText} updateText={updateText} />
// }

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