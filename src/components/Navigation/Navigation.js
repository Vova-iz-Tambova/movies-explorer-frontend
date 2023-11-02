import './Navigation.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState(false);

  return (
    <section className="nav">
      <NavLink to="/" className="nav__logo" onClick={() => setLoggedIn(false)}>
        <img src={logo} alt="логотип" /></NavLink>
      {loggedIn
        ? <div className='nav__panel'>
          <div className='nav__action'>
            <NavLink to="/movies"
              className="nav__link"
              onClick={() => setSavedMovies(false)}>Фильмы</NavLink>
            <NavLink to="/saved-movies"
              className="nav__link"
              onClick={() => setSavedMovies(true)}>Сохранённые фильмы</NavLink>
          </div>
          <div className="nav__user">
            <NavLink to="/profile" className="nav__link">Аккаунт</NavLink>
            <div className="nav__profile" />
          </div>
        </div>
        :
        <div className='nav__welcome'>
          <NavLink to="/signup" className="nav__link">Регистрация</NavLink>
          <NavLink to="/signin"
            className="nav__link"
            onClick={() => setLoggedIn(true)}>
            <div className="nav__button">Войти</div>
          </NavLink>
        </div>
      }
    </section>
  )
}
export default Navigation;