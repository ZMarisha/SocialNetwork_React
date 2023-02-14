import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import h from './Header.module.css'

const Header = () => {

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(response => {
      if (response.data.resultCode === 0) {
      console.log(response)
      }
    })
  }, [])

    return (
      <header className={h.header}>
        <NavLink to='/login'>Login</NavLink>
        <img className={h.logoImg} alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg'></img>
      </header>
    )
}

export default Header;