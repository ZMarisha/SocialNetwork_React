import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    console.log(props.postsData)

    let addNewPost = () => {
        props.addPost();
    }

    let newText = (event) => {
        let text = event.target.value;
        props.updateNewText(text);
    }

    let posts = props.postsData.map( data => [<Post post={data.post} likeCount={data.likeCount} key={data.id} />])
    return (
        <div className={p.yourNews}>
            <h2>My posts</h2>
            <div className={p.form}>
              <textarea onChange={newText} value={props.updateText} placeholder='your post...' />
              <button type='submit' onClick={addNewPost}>Publish</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;