import { profileReducer } from "./profileReducer.js";
import { messagesReducer } from "./messagesReducer.js";


let store = {
    _STATE: {
    
        ProfilePage: {
            POSTS: [
                {id: 1, post: 'Hi, how are you?', likeCount: 27},
                {id: 2, post: 'It is my first post!', likeCount: 3},
                {id: 3, post: 'Hi! Hi! Hi!', likeCount: 14}
            ],
            updateText: ''
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
            ],
            updateTextMessage: ''
        }
    },
    _rerenderEntireTree () {
        console.log('State was changed!')
    },

    getState () {
        return this._STATE;
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch (action) {

        this._STATE.ProfilePage = profileReducer(this._STATE.ProfilePage, action);
        this._STATE.MessagesPage = messagesReducer(this._STATE.MessagesPage, action)
        this._rerenderEntireTree(this._STATE);
    }
};


window.store = store;

export default store;