import './AboutMe.css';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className='me' id='me'>
      <h3 className='me__title'>Студент</h3>
      <div className='me__line' />
      <div className='me__card'>
        <div className='me__info'>
          <h2 className='me__name'>Владимир</h2>
          <p className='me__career'>Web-разработчик</p>
          <p className='me__biography'>
          Увлекаюсь кодингом и всем что связанно с IT-технологиями ещё со средней школы. Но это не единственное моё увлечение, также я: играю на гитаре;  работал в СМИ (печатных изданиях, на радио и телевидении); получил среднее медицинское и&nbsp;высшее психологическое образование; конструирую и изготавливаю мебель. Кроме составления программ мне ещё так-же нравиться путешествовать на автомобиле. В&nbsp;будующем я планирую построить собственный автодом. И в связи с этим решил больше уделять времени фриланс-деятельности, связанной с web-разработкой.
          </p>
          <Link to="https://github.com/Vova-iz-Tambova" className='me__github'>Github</Link>
        </div>
        <div className='me__photo' />
      </div>
    </section>
  );
};

export default AboutMe;