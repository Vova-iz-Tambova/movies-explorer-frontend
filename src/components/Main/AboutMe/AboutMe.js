import './AboutMe.css';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className='me'>
      <h3 className='me__title' id='me'>Студент</h3>
      <div className='me__line' />
      <div className='me__card'>
        <div className='me__info'>
          <h2 className='me__name'>Владимир</h2>
          <p className='me__career'>Web-разработчик</p>
          <p className='me__biography'>
          Увлекаюсь программированием и всем что связанно с компьютерами ещё со средней школы, но это не единственное моё увлечение т.к. мне нравиться учиться и получать новый опыт. Я: играю на гитаре;  работал в СМИ (печатных изданиях, на радио и телевидении); получил медицинское и психологическое образование; проектирую и изготавливаю мебель. Но больше всего я люблю путешествовать на автомобиле с семьёй и планирую построить собственный автодом. В связи с этим я выбрал для себя удалённую работу связанную с web-разработкой не привязанной к постоянному месту жительства.
          </p>
          <Link to="https://github.com/Vova-iz-Tambova" className='me__github'>Github</Link>
        </div>
        <div className='me__photo' />
      </div>
    </section>
  )
};

export default AboutMe;