import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import profileReducer from './profileReducer.js';
import messagesReducer from './messagesReducer.js'
import findusersReducer from './findusersReducer.js';



let reducers = combineReducers({
ProfilePage: profileReducer,
MessagesPage: messagesReducer,
UsersPage: findusersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;