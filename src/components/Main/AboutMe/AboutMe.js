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
          Увлекаюсь кодингом и всем что связанно с IT-технологиями ещё со средней школы. Но это не единственное моё увлечение, также я: играю на гитаре;  работал в СМИ (печатных изданиях, на радио и телевидении); получил среднее медицинское и&nbsp;высшее психологическое образование; конструирую и изготавливаю мебель; самостоятельно ремонтирую телефоны и ноутбуки; но&nbsp;особенно мне нравится путешествовать на автомобиле. В&nbsp;будущем я планирую построить собственный автодом для путешествий и в связи с этим решил больше уделять времени профессии позволяющей реализовать свою мечту.
          </p>
          <Link to="https://github.com/Vova-iz-Tambova" target='_blank' className='me__githublink__effect'>Github</Link>
        </div>
        <div className='me__photo' />
      </div>
    </section>
  );
};

export default AboutMe;