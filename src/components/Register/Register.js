import './Register.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='login'>
      <NavLink to="/" className="register__logo">
        <img src={logo} alt="логотип" /></NavLink>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <p className='register__description'>Имя</p>
      <div className='register__field'>
        <div className='register__input'>Виталий</div>
      </div>
      <p className='register__error'>Что-то пошло не так...</p>
      <p className='register__description'>E-mail</p>
      <div className='register__field'>
        <div className='register__input'>pochta@yandex.ru|</div>
      </div>
      <p className='register__error'>Что-то пошло не так...</p>
      <p className='register__description'>Пароль</p>
      <div className='register__field'>
        <div className='register__input'>••••••••••••••</div>
      </div>
      <p className='register__error'>Что-то пошло не так...</p>
      <div className='register__submit'>Зарегистрироваться</div>
      <div className='register__nav'>
        <p >Уже зарегистрированы? <NavLink to="/signin"
          style={{
            textDecoration: "none",
            color: "#4285F4"
          }}
        >Войти</NavLink></p>
      </div>
    </section >
  )
}
export default Register;