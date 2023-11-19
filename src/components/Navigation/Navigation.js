import './Navigation.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Navigation({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function openProfile() {
    navigate('/profile');
  }

  return (
    <div className="nav">
      <NavLink to="/" className="nav__logo  animation">
        <img src={logo} alt="логотип" /></NavLink>
      {loggedIn
        ? <>
          <nav className='nav__panel'>
            <div className='nav__action'>
              <NavLink to="/movies"
                className="nav__link  effect">Фильмы</NavLink>
              <NavLink to="/saved-movies"
                className="nav__link  effect">Сохранённые фильмы</NavLink>
            </div>
            <div className="nav__user">
              <NavLink to="/profile" className="nav__link  effect">Аккаунт</NavLink>
              <div className={`${(location.pathname === "/") ? "nav__profile  nav__profile_navy" : "nav__profile"}  animation`}
                onClick={openProfile} />
            </div>
          </nav>
          {isMenuOpen ?
            <>
              <div className='overlay'
                onClick={() => setIsMenuOpen(false)}
              />
              <nav className='menu'>
                <button className='menu__close  animation' onClick={() => setIsMenuOpen(false)} type='button' />
                <div className='menu__nav'>
                  <NavLink to="/" className="menu__link  effect">Главная</NavLink>
                  <NavLink to="/movies" className="menu__link  effect">Фильмы</NavLink>
                  <NavLink to="/saved-movies" className="menu__link  effect">Сохранённые фильмы</NavLink>
                </div>
                <div className="nav__user">
                  <NavLink to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="nav__account  effect">Аккаунт</NavLink>
                  <div className="nav__profile  animation" onClick={openProfile} />
                </div>
              </nav>
            </>
            :
            <button className="nav__menu  animation"
              onClick={() => setIsMenuOpen(true)}
              type='button'
            />
          }

        </>
        :
        <nav className='nav__welcome'>
          <NavLink to="/signup" className="nav__link  effect">Регистрация</NavLink>
          <NavLink to="/signin"
            className="nav__link  effect">
            <div className="nav__button">Войти</div>
          </NavLink>
        </nav>
      }
    </div>
  )
}
export default Navigation;