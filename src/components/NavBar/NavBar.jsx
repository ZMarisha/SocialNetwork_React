import React from "react";
import { NavLink } from 'react-router-dom';
import n from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={n.navBar}>
          <div className={n.item}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/myprofile'>Profile</NavLink>
          </div>
          <div className={n.item}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/dialogs'>Messages</NavLink>
          </div>
          <div className={n.item}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/news'>News</NavLink>
          </div>
          <div className={n.item}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/music'>Music</NavLink>
          </div>
          <div className={n.item}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/findusers'>Find Users</NavLink>
          </div>
          <div className={`${n.settingNavBar} ${n.item}`}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/settings'>Settings</NavLink>
          </div>
          <div className={`${n.friends} ${n.item}`}>
            <NavLink className = {navData => navData.isActive ? n.active : n.item} to='/myfriends'>My Friends</NavLink>
          </div>
        </nav>
    )
}

export default NavBar;