import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './components/redux/store.js';
import { addNewPostCreator, updateNewTextCreator } from './components/redux/profileReducer.js';
import { updateTextMessageCreator, sendMessageCreator } from './components/redux/messagesReducer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} 
                          updateNewTextCreator={updateNewTextCreator} 
                          addNewPostCreator={addNewPostCreator} 
                          updateTextMessageCreator={updateTextMessageCreator} 
                          sendMessageCreator={sendMessageCreator} 
                           />
    </React.StrictMode>
  );
}

rerender(store.getState());
store.subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
