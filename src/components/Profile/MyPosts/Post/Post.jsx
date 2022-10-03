import p from './Post.module.css'

const Post = (props) => {
    return <div className={p.newPost}>
        <p>{props.post}</p>
        <div>
            <p>like <span>- ({props.likeCount})</span></p>
        </div>
    </div>
}

export default Post;