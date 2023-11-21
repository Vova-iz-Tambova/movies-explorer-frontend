import './Register.css';
import logo from '../../images/logo.svg';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';

function Register({ setLoggedIn, setCurrentUser }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [formNotValid, setformNotValid] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 4500)
    }
  }, [message])


  function handleSubmit(e) {
    e.preventDefault();
    api.register({ name, email, password })
      .then(res => {
        // console.log(res);
        if (res.status === 400) {
          throw setMessage('Переданы некорректные данные при создании пользователя');
        } else if (res.status === 409) {
          throw setMessage('Пользователь с таким email уже существует');
        }
        else if (res.status === 201) {
          return res;
        }
      })
      .then(() => {
        api.login({ email, password })
          .then(res => {
            if (res.status === 401) {
              throw setMessage('Неправильные почта или пароль');
            } else if (res.status === 400) {
              throw setMessage('Переданы некорректные данные');
            } else if (res.status === 200) {
              return res.json();
            }
          })
          .then(res => {
            localStorage.setItem("jwt", res.token);
            api.checkToken(res.token).then(res => res.json())
              .then((res) => {
                setCurrentUser(res);
                return res;
              })
              .then(res => {
                setLoggedIn(true);
                localStorage.setItem("loggedIn", true);
                setMessage('Успех');
                setTimeout(() => {
                  navigate('/movies');
                }, 400)
              })
              .catch(console.error)
          })
          .catch((res) => {
            setTimeout(() => {
              setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
            }, 4501);
          });
      }
      )
      .catch(() => {
        setTimeout(() => {
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        }, 4501);
      })
  }

  React.useEffect(() => {
    if (nameError || emailError || passwordError || !name || !email || !password) {
      setformNotValid(true);
    } else {
      setformNotValid(false);
    }
  }, [nameError, emailError, passwordError, name, email, password]);

  function handleName(e) { setName(e.target.value); setNameError(e.target.validationMessage); }
  function handleEmail(e) {
    setEmail(e.target.value);
    if (e.target.validationMessage === 'Введите данные в указанном формате.') {
      setEmailError(`${e.target.validationMessage} Например: user@mail.ru`);
    } else {
      setEmailError(e.target.validationMessage);
    }
  }
  function handlePassword(e) { setPassword(e.target.value); setPasswordError(e.target.validationMessage); }

  return (
    <section className='register'>
      <NavLink to="/" className="register__logo  animation">
        <img src={logo} alt="логотип" /></NavLink>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form name='registerForm' className='register__form' onSubmit={handleSubmit} noValidate>
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
        <p className='register__error'>{nameError}</p>
        <label className='register__description'>E-mail</label>
        <div className='register__field'>
          <input required
            value={email}
            type="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,}"
            placeholder='E-mail'
            onChange={handleEmail}
            className='register__input'>
          </input>
        </div>
        <p className='register__error'>{emailError}</p>
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
        <p className='register__error'>{passwordError}</p>
        <button disabled={formNotValid}
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
