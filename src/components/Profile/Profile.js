import './Profile.css';
import { NavLink } from 'react-router-dom';

function Profile({ setLoggedIn }) {
  return (
    <section className="profile">
      <h2 className='profile__greeting'>Привет, Александр!</h2>
      <div className='profile__name'>
        <p className='profile__info'>Имя</p>
        <p className='profile__info'>Александр</p>
      </div>
      <div className='profile__email'>
        <p className='profile__info'>E-mail</p>
        <p className='profile__info'>pochta@yandex.ru</p>
      </div>
      <div className='profile__edit  link__effect'>Редактировать</div>
      <NavLink to='/' className='profile__logout  link__effect'
        onClick={() => setLoggedIn(false)}>Выйти из аккаунта</NavLink>
    </section>
  )
}
export default Profile;