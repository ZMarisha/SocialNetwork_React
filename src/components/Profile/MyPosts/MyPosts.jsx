import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    const postsData = props.posts
    console.log(postsData)

    let newPostEl = React.createRef();
    let addNewPost = () => {
        let text = newPostEl.current.value;
        props.addPost(text);
        newPostEl.current.value = '';
    }

    let posts = postsData.map( data => [<Post post={data.post} likeCount={data.likeCount} key={data.id} />])
    return (
        <div className={p.yourNews}>
            <h2>My posts</h2>
            <div className={p.form}>
              <textarea ref={newPostEl} placeholder='your news...'/>
              <button type='submit' onClick={addNewPost}>Publish</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;