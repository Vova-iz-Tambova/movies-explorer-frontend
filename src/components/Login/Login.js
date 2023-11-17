import './Login.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';

function Login({ setLoggedIn }) {
  const [email, setEmail] = React.useState('user@user.ru');
  const [password, setPassword] = React.useState('user');
  const [message, setMessage] = React.useState('');
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
    api.login({ email, password })
      .then(res => {
        console.log(res);
        if (res.status === 401) {
          throw setMessage('Неправильные почта или пароль');
        } else if (res.status === 400) {
          throw setMessage('Переданы некорректные данные');
        }
        else return res.json();
      })
      .then(res => {
        localStorage.removeItem("jwt");
        localStorage.setItem("jwt", res.token);
        localStorage.setItem("isLogged", true);
        setLoggedIn(true);
        setMessage('Успех');
        setTimeout(() => {
          navigate('/movies');
        }, 400)
      })
      .catch((res) => {
        setTimeout(() => {
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        }, 4501);
      })
  }

  React.useEffect(() => {
    if (emailError || passwordError || !email || !password) {
      setformNotValid(true);
    } else {
      setformNotValid(false);
    }
  }, [emailError, passwordError, email, password]);

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
    <section className='login'>
      <NavLink to="/" className="login__logo  animation">
        <img src={logo} alt="логотип" /></NavLink>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__description'>E-mail</label>
        <div className='login__field'>
          <input required
            value={email}
            type="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,}"
            placeholder='E-mail'
            onChange={handleEmail}
            className='login__input'>
          </input>
        </div>
        <p className='login__error'>{emailError}</p>
        <label className='login__description'>Пароль</label>
        <div className='login__field'>
          <input required
            type="password"
            value={password}
            minLength="2"
            maxLength="12"
            placeholder='Пароль'
            onChange={handlePassword}
            className='login__input'>
          </input>
        </div>
        <p className='login__error'>{passwordError}</p>
        <button disabled={formNotValid}
          className={`login__submit animation ${message && `login__submit_error`}`}
          type="submit">
          {message ? `${message}` : `Войти`}
        </button>
      </form>
      <div className='login__nav'>
        <p>Ещё не зарегистрированы? <NavLink className='login__redirect  effect'
          to="/signup"
        >Регистрация</NavLink></p>
      </div>
    </section>
  )
}
export default Login;