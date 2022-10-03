import p from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    const postsData = props.posts
    console.log(postsData)

    // const POSTS = [
    //     {id: 1, post: 'Hi, how are you?', likeCount: 27},
    //     {id: 2, post: 'It is my first post!', likeCount: 3},
    //     {id: 3, post: 'Hi! Hi! Hi!', likeCount: 14}
    // ]

    let posts = postsData.map( data => [<Post post={data.post} likeCount={data.likeCount} key={data.id} />])
    return (
        <div className={p.yourNews}>
            <h2>My posts</h2>
            <form className={p.form}>
              <textarea placeholder='your news...'/>
              <button type='submit'>Publish</button>
            </form>
            {posts}
        </div>
    )
}

export default MyPosts;