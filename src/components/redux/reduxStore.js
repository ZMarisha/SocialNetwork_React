import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import profileReducer from './profileReducer.js';
import messagesReducer from './messagesReducer.js'



let reducers = combineReducers({
ProfilePage: profileReducer,
MessagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;