import './Login.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login({ setLoggedIn }) {
  return (
    <section className='login'>
      <NavLink to="/" className="login__logo">
        <img src={logo} alt="логотип" /></NavLink>
      <h2 className='login__title'>Рады видеть!</h2>
      <p className='login__description'>E-mail</p>
      <div className='login__field'>
        <div className='login__input'>pochta@yandex.ru|</div>
      </div>
      <p className='login__error'>Что-то пошло не так...</p>
      <p className='login__description'>Пароль</p>
      <div className='login__field'>
        <div className='login__input'></div>
      </div>
      <p className='login__error'>Что-то пошло не так...</p>
      <NavLink to='/movies' className='login__submit  animation'
        onClick={() => setLoggedIn(true)}>Войти</NavLink>
      <div className='login__nav'>
        <p >Ещё не зарегистрированы? <NavLink className='link__effect'
        to="/signup"
          style={{
            textDecoration: "none",
            color: "#4285F4"
          }}
        >Регистрация</NavLink></p>
      </div>
    </section>
  )
}
export default Login;