import './Profile.css';
import React, { useContext } from 'react';
import { useNavigate, } from 'react-router-dom';
import api from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ setLoggedIn, setCurrentUser }) {
  const [name, setName] = React.useState(localStorage.getItem("name"));
  const [email, setEmail] = React.useState(localStorage.getItem("email"));
  const [message, setMessage] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [formNotValid, setformNotValid] = React.useState(true);
  const [render, setRender] = React.useState(false);

  const currentUser = useContext(CurrentUserContext);

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
    api.update({ name, email })
      .then(res => {
        if (res.status === 400) {
          throw setMessage('Переданы некорректные данные при создании пользователя')
        } else if (res.status === 409) {
          throw setMessage('Пользователь с таким email уже существует')
        }
        else if (res.status === 200) {
          setMessage('Успех')
          setCurrentUser(name);
          setTimeout(() => {
            setMessage('')
          }, 700)
        }
      })
      .catch(() => {
        setTimeout(() => {
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        }, 4501);
      })
  }

  React.useEffect(() => {
    if (
      nameError || emailError || (name === localStorage.getItem("name") && email === localStorage.getItem("email"))
    ) {
      setformNotValid(true);
    } else {
      setformNotValid(false);
    }
  }, [nameError, emailError, name, email]);

  function handleName(e) {
    setName(e.target.value);
    setNameError(e.target.validationMessage);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
    if (e.target.validationMessage === 'Введите данные в указанном формате.') {
      setEmailError(`${e.target.validationMessage} Например: user@mail.ru`);
    } else {
      setEmailError(e.target.validationMessage);
    }
  };

  function logOut() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
    setLoggedIn(false);
  }

  return (
    <section className="profile">
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
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
        <button disabled={formNotValid} onClick={() => { setRender(!render) }}
          className={`profile__edit  effect ${message && `profile__edit_error`}`}
          type="submit">
          {message ? `${message}` : `Редактировать`}
        </button>
      </form>
      <div className='profile__logout  effect'
        onClick={logOut}>Выйти из аккаунта</div>
    </section >
  )
}
export default Profile;
