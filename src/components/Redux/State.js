const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

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

    // addPost () {
    //     let post = {
    //         id: 4,
    //         post: this._STATE.ProfilePage.updateText,
    //         likeCount: 0
    //     };
    
    //     this._STATE.ProfilePage.POSTS.push(post);
    //     this._STATE.ProfilePage.updateText = ''
    //     this._rerenderEntireTree(this._STATE);
    // },
    // updateNewText (text) {
    //     this._STATE.ProfilePage.updateText = text;
    //     this._rerenderEntireTree(this._STATE);
    // },
    dispatch (action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 4,
                post: this._STATE.ProfilePage.updateText,
                likeCount: 0
            };

        this._STATE.ProfilePage.POSTS.push(post);
        this._STATE.ProfilePage.updateText = ''
        this._rerenderEntireTree(this._STATE);

        } else if (action.type === UPDATE_NEW_TEXT) {
            this._STATE.ProfilePage.updateText = action.text;
            this._rerenderEntireTree(this._STATE);

        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._STATE.MessagesPage.updateTextMessage = action.newMessage;
            this._rerenderEntireTree(this._STATE);

        } else if (action.type === SEND_MESSAGE) {
            let newMessages = {
                id: 6,
                message: this._STATE.MessagesPage.updateTextMessage
            }
            this._STATE.MessagesPage.MESSAGES.push(newMessages);
            this.updateTextMessage = '';
            this._rerenderEntireTree(this._STATE);
        }
    }
};

export let addNewPostCreator = () => ( {type: ADD_POST} ); //jbject
export let updateNewTextCreator = (text) => ( {type: UPDATE_NEW_TEXT, text: text}); //object
export let updateTextMessageCreator = (text) => ( {type: UPDATE_NEW_MESSAGE, newMessage: text} )
export let sendMessageCreator = () => ( {type: SEND_MESSAGE} )

window.store = store;

export default store;