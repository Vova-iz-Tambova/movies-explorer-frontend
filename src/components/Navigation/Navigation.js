import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation(props) {

  return (
    <>
      <div className="nav">
        {props.loggedIn
          ? <>
            <NavLink to="/movies" className="nav__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="nav__link">Сохранённые фильмы</NavLink>
          </>
          : <></>
        }
      </div>
      <div className="nav">
        {props.loggedIn
          ?
            <NavLink to="/profile" className="nav__link">Аккаунт</NavLink>
          : <>
            <NavLink to="/signup" className="nav__link">Регистрация</NavLink>
            <NavLink to="/signin" className="nav__link" onClick={() => props.setLoggedIn(true)}>Войти</NavLink>
          </>
        }
      </div >
    </>
  )
}
export default Navigation;