import './Register.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';

function Register() {
  const [name, setName] = React.useState('Пользователь')
  const [email, setEmail] = React.useState('user@user.ru')
  const [password, setPassword] = React.useState('user')
  const [message, setMessage] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 4500)
    }
  }, [message])

  function handleName(e) { setName(e.target.value) }
  function handleEmail(e) { setEmail(e.target.value) }
  function handlePassword(e) { setPassword(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault();
    api.register({ name, email, password })
      .then(res => {
        // console.log(res);
        if (res.status === 400) {
          setMessage('Переданы некорректные данные при создании пользователя')
        } else if (res.status === 409) {
          setMessage('Пользователь с таким email уже существует')
        }
        else if (res.status === 201) {
          setMessage('Успех')
          setTimeout(() => {
            navigate('/signin');
          }, 400)
        }
      })
      .catch(()=> {
        setTimeout(() => {
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        }, 400);
      })
  }

  return (
    <section className='register'>
      <NavLink to="/" className="register__logo  animation">
        <img src={logo} alt="логотип" /></NavLink>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__description'>Имя</label>
        <div className='register__field'>
          <input required
            value={name}
            type="text"
            minLength="2"
            maxLength="40"
            placeholder='Имя'
            onChange={handleName}
            className='register__input'>
          </input>
        </div>
        <p className='register__error'>Что-то пошло не так...</p>
        <label className='register__description'>E-mail</label>
        <div className='register__field'>
          <input required
            value={email}
            type="email"
            placeholder='E-mail'
            onChange={handleEmail}
            className='register__input'>
          </input>
        </div>
        <p className='register__error'>Что-то пошло не так...</p>
        <label className='register__description'>Пароль</label>
        <div className='register__field'>
          <input required
            type="password"
            value={password}
            minLength="2"
            maxLength="12"
            placeholder='Пароль'
            onChange={handlePassword}
            className='register__input'>
          </input>
        </div>
        <p className='register__error'>Что-то пошло не так...</p>
        <button
          className={`register__submit  animation ${message && `register__submit_error`}`}
          type="submit">
          {message ? `${message}` : `Зарегистрироваться`}
        </button>
      </form>
      <div className='register__nav'>
        <p >Уже зарегистрированы? <NavLink to="/signin" className='register__redirect  effect'
        >Войти</NavLink></p>
      </div>
    </section >
  )
}
export default Register;