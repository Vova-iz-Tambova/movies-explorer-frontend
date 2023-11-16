import './Profile.css';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Profile({ setLoggedIn }) {
  const [name, setName] = React.useState('Александр')
  const [email, setEmail] = React.useState('pochta@yandex.ru')

  const navigate = useNavigate();

  function handleName(e) { setName(e.target.value) }
  function handleEmail(e) { setEmail(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function logOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false)
    navigate('/');
  }

  return (
    <section className="profile">
      <h1 className='profile__title'>Привет, {name}!</h1>
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
        <div className='profile__field'>
          <label className='profile__info'>E-mail</label>
          <input required
            value={email}
            type="email"
            placeholder='E-mail'
            onChange={handleEmail}
            className='profile__input'
          />
        </div>
        <button
          className='profile__edit  effect'
          type="submit">Редактировать
        </button>
      </form>
      <div className='profile__logout  effect'
        onClick={logOut}>Выйти из аккаунта</div>
    </section>
  )
}
export default Profile;