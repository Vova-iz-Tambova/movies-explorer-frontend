import './Header.css'
import React from 'react';
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <header className="header">
      <div className='header__content'>
        <NavLink to="/" className="header__logo" onClick={() => setLoggedIn(false)}>
          <img src={logo} alt="логотип" /></NavLink>
        <div className='header__menu'>
          <Navigation
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn} />
        </div>
      </div>
      {/* {loggedIn
        ? <>
        </>
        :

      } */}

    </header >
  )
}
export default Header;