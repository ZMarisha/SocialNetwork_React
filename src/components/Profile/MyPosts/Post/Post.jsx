import p from './Post.module.css'

const Post = (props) => {
    return <div className={p.newPost}>
        <div className={p.smileyPost}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511835_22.jpg' alt='smiley' />
        </div>
        <div>
            <p>{props.post}</p>
            <div className='likePost'>
              <p>like <span>- ({props.likeCount})</span></p>
            </div>
        </div>
    </div>
}

export default Post;