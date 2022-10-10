import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './components/Redux/State.js';
import { addNewPostCreator, updateNewTextCreator, updateTextMessageCreator, sendMessageCreator } from './components/Redux/State.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} 
                          updateNewTextCreator={updateNewTextCreator} 
                          addNewPostCreator={addNewPostCreator} 
                          updateTextMessageCreator={updateTextMessageCreator} 
                          sendMessageCreator={sendMessageCreator} 
                          updateTextMessage={store._STATE.MessagesPage.updateTextMessage} />
    </React.StrictMode>
  );
}

rerender(store.getState());
store.subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
