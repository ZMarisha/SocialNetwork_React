const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';

export let addNewPostCreator = () => ( {type: ADD_POST} );
export let updateNewTextCreator = (text) => ( {type: UPDATE_NEW_TEXT, text: text});

export const profileReducer = (state, action) => {
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