const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';

let initialState = {
    POSTS: [
        {id: 1, post: 'Hi, how are you?', likeCount: 27},
        {id: 2, post: 'It is my first post!', likeCount: 3},
        {id: 3, post: 'Hi! Hi! Hi!', likeCount: 14}
    ],
    updateText: ''
};

export let addNewPostCreator = () => ( {type: ADD_POST} );
export let updateNewTextCreator = (text) => ( {type: UPDATE_NEW_TEXT, text: text});


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 4,
                post: state.updateText,
                likeCount: 0
            };
            
            state.POSTS.push(post);
            state.updateText = ''
            return state;

        case UPDATE_NEW_TEXT: 
            state.updateText = action.text
            return state;

        default:
            return state;    
    }
}

export default profileReducer;