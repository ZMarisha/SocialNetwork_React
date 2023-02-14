import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import MyFriends from './components/MyFriends/MyFriends.jsx';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import UsersProfile from './components/FindUsers/UsersProfile/UsersProfile';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='container app-wrapper'>
        <Header />
        <NavBar />
        <main className='app-wrapper-profile'>
          <Routes>
            <Route path='/myprofile' element={<Profile store={props.store}
                                                      state={props.state}  />}/>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}
                                                      state={props.state} />}/>
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/findusers' element={<FindUsersContainer />} />
            <Route path='/profile/:userId' element={<UsersProfile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/myfriends' element={<MyFriends friends={props.state.MessagesPage} />} />
          </Routes>  
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
