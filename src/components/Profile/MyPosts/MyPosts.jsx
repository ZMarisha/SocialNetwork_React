import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    console.log(props.updateNewText)
    const postsData = props.posts
    console.log(postsData)

    let newPostEl = React.createRef();
    let addNewPost = () => {
        //props.addPost();
        props.dispatch({ type: 'ADD-POST' })
    }

    let newText = () => {
        let text = newPostEl.current.value;
        //props.updateNewText(text);
        props.dispatch({ type: 'UPDATE-NEW-TEXT', text: text })
    }

    let posts = postsData.map( data => [<Post post={data.post} likeCount={data.likeCount} key={data.id} />])
    return (
        <div className={p.yourNews}>
            <h2>My posts</h2>
            <div className={p.form}>
              <textarea onChange={newText} ref={newPostEl} value={props.updateText} placeholder='your message...' />
              <button type='submit' onClick={addNewPost}>Publish</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;