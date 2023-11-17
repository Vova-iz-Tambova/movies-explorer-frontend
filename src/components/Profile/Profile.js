import './Profile.css';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi'

function Profile({ setLoggedIn }) {
  const [name, setName] = React.useState(localStorage.getItem("name"));
  const [email, setEmail] = React.useState(localStorage.getItem("email"));
  const [message, setMessage] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [formNotValid, setformNotValid] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 4500)
    }
  }, [message])

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      console.log(res);
      setName(res.name);
      setEmail(res.email);
      localStorage.setItem("name", res.name);
      localStorage.setItem("email", res.email);
    }).catch(console.error);
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    api.update({ name, email })
      .then(res => {
        console.log(res);
        if (res.status === 400) {
          throw setMessage('Переданы некорректные данные при создании пользователя')
        } else if (res.status === 409) {
          throw setMessage('Пользователь с таким email уже существует')
        }
        else if (res.status === 200) {
          setMessage('Успех')
          setTimeout(() => {
            navigate(0);
          }, 400)
        }
      })
      .catch(() => {
        setTimeout(() => {
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        }, 4501);
      })
  }

  React.useEffect(() => {
    if (nameError || emailError || !name || !email) {
      setformNotValid(true);
    } else {
      setformNotValid(false);
    }
  }, [nameError, emailError, name, email]);

  function handleName(e) { setName(e.target.value); setNameError(e.target.validationMessage); }
  function handleEmail(e) {
    setEmail(e.target.value);
    if (e.target.validationMessage === 'Введите данные в указанном формате.') {
      setEmailError(`${e.target.validationMessage} Например: user@mail.ru`);
    } else {
      setEmailError(e.target.validationMessage);
    }
  }

  function logOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("film");
    localStorage.removeItem("isShort");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <section className="profile">
      <h1 className='profile__title'>Привет, {localStorage.getItem("name")}!</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__field'>
          <label className='profile__info'>Имя</label>
          <input required
            value={name}
            type="text"
            minLength="2"
            maxLength="40"
            placeholder='Имя'
            onChange={handleName}
            className='profile__input'
          ></input>
        </div>
        <p className='register__error'>{nameError}</p>
        <div className='profile__field'>
          <label className='profile__info'>E-mail</label>
          <input required
            value={email}
            type="email"
            placeholder='E-mail'
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,}"
            onChange={handleEmail}
            className='profile__input'
          />
        </div>
        <p className='register__error'>{emailError}</p>
        <button disabled={formNotValid}
          className={`profile__edit  effect ${message && `profile__edit_error`}`}
          type="submit">
          {message ? `${message}` : `Редактировать`}
        </button>
      </form>
      <div className='profile__logout  effect'
        onClick={logOut}>Выйти из аккаунта</div>
    </section>
  )
}
export default Profile;