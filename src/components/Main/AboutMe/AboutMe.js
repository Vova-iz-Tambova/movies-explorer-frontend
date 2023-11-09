import './AboutMe.css';
import { Link } from 'react-router-dom';
import  Photo  from '../../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className='me' id='me'>
      <h2 className='me__title'>Студент</h2>
      <div className='me__line' />
      <div className='me__card'>
        <div className='me__info'>
          <h4 className='me__name'>Владимир</h4>
          <p className='me__career'>Web-разработчик</p>
          <p className='me__biography'>
            Увлекаюсь кодингом с 1996г. Играю на гитаре;  работал в&nbsp;СМИ (печатных изданиях, на&nbsp;радио и&nbsp;телевидении); получил среднее медицинское и&nbsp;высшее психологическое образование; изготавливаю мебель; ремонтирую ноутбуки; обожаю путешествовать. В&nbsp;будущем планирую построить собственный автодом и в связи с этим решил больше уделять времени профессии позволяющей реализовать свою мечту.
          </p>
          <Link to="https://github.com/Vova-iz-Tambova" target='_blank' className='me__github  effect'>Github</Link>
        </div>
        <img className='me__photo' src={Photo} alt='фотография студента'/>
      </div>
    </section>
  );
};

export default AboutMe;