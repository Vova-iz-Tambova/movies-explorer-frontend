import './Navigation.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Navigation({ loggedIn, isLanding }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section className="nav">
      <NavLink to="/" className="nav__logo">
        <img src={logo} alt="логотип" /></NavLink>
      {loggedIn
        ? <>
          <div className='nav__panel'>
            <div className='nav__action'>
              <NavLink to="/movies"
                className="nav__link  link__effect">Фильмы</NavLink>
              <NavLink to="/saved-movies"
                className="nav__link  link__effect">Сохранённые фильмы</NavLink>
            </div>
            <div className="nav__user">
              <NavLink to="/profile" className="nav__link  link__effect">Аккаунт</NavLink>
              <div className={`${isLanding ? "nav__profile" : "nav__profile  nav__profile_dark"}`} />
            </div>
          </div>
          {isMenuOpen ?
            <>
              <div className='overlay'
                onClick={() => setIsMenuOpen(false)}
              />
              <div className='menu'>
                <div className='menu__close' onClick={() => setIsMenuOpen(false)} />
                <div className='menu__nav'>
                  <NavLink to="/" className="menu__link  link__effect">Главная</NavLink>
                  <NavLink to="/movies" className="menu__link  link__effect">Фильмы</NavLink>
                  <NavLink to="/saved-movies" className="menu__link  link__effect">Сохранённые фильмы</NavLink>
                </div>
                <div className="nav__user">
                  <NavLink to="/profile" className="nav__account">Аккаунт</NavLink>
                  <div className="nav__profile" />
                </div>
              </div>
            </>
            :
            <div className="nav__menu"
              onClick={() => setIsMenuOpen(true)}
            />
          }

        </>
        :
        <div className='nav__welcome'>
          <NavLink to="/signup" className="nav__link  link__effect">Регистрация</NavLink>
          <NavLink to="/signin"
            className="nav__link  link__effect">
            <div className="nav__button">Войти</div>
          </NavLink>
        </div>
      }
    </section >
  )
}
export default Navigation;