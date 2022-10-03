import h from './Header.module.css'

const Header = () => {
    return (
      <header className={h.header}>
        <img className={h.logoImg} alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg'></img>
      </header>
    )
}

export default Header;