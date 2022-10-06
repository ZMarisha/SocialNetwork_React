// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import MyFriends from './components/MyFriends/MyFriends.jsx';

const App = (props) => {
  console.log(props.store)
  return (
    <BrowserRouter>
      <div className='container app-wrapper'>
        <Header />
        <NavBar />
        <main className='app-wrapper-profile'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.ProfilePage} dispatch={props.dispatch} />}/>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.MessagesPage} />}/>
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/myfriends' element={<MyFriends friends={props.state.MessagesPage} />} />
          </Routes>  
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
