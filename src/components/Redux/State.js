import { rerender } from "../../render";

let STATE = {
    
    ProfilePage: {
        POSTS: [
            {id: 1, post: 'Hi, how are you?', likeCount: 27},
            {id: 2, post: 'It is my first post!', likeCount: 3},
            {id: 3, post: 'Hi! Hi! Hi!', likeCount: 14}
        ]
    },

    MessagesPage: {
        USERS: [
            {id: 1, name: 'Victor', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
            {id: 2, name: 'Anna', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 3, name: 'Valerya', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
            {id: 4, name: 'Ammi', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511851_21.jpg'},
        ], 
        MESSAGES: [
            {id: 1, message: 'Evryone messaage'},
            {id: 2, message: 'How is youe job?'},
            {id: 3, message: 'I hate to do things which I do not like!'},
            {id: 4, message: 'Hi!'},
        ]
    }
};

export let addPost = (dataPost) => {
    let post = {
        id: 4,
        post: dataPost,
        likeCount: 0
    };

    STATE.ProfilePage.POSTS.push(post);
    rerender(STATE);
}

export default STATE;