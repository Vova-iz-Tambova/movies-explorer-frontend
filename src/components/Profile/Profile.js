import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h2 className='profile__greeting'>Привет, Виталий!</h2>
      <div className='profile__name'>
        <p className='profile__info'>Имя</p>
        <p className='profile__info'>Виталий</p>
      </div>
      <div className='profile__email'>
        <p className='profile__info'>E-mail</p>
        <p className='profile__info'>pochta@yandex.ru</p>
      </div>
      <div className='profile__edit'>Редактировать</div>
      <div className='profile__logout'>Выйти из аккаунта</div>
    </section>
  )
}
export default Profile;