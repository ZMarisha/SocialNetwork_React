import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const POSTS = [
  {id: 1, post: 'Hi, how are you?', likeCount: 27},
  {id: 2, post: 'It is my first post!', likeCount: 3},
  {id: 3, post: 'Hi! Hi! Hi!', likeCount: 14}
];

const DATA = [
  {id: 1, name: 'Victor'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Valerya'},
];

const MESSAGES = [
  {id: 1, message: 'Evryone messaage'},
  {id: 2, message: 'How is youe job?'},
  {id: 3, message: 'I hate to do things which I do not like!'},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={POSTS} data={DATA} messages={MESSAGES} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
