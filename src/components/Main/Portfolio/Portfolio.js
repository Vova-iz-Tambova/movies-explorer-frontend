import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <Link to='https://vova-iz-tambova.github.io/how-to-learn/' target='_blank' className='portfolio__nav'>
        <p className='portfolio__name'>Статичный сайт</p>
        <p className='portfolio__arrow'>↗</p>
      </Link>
      <Link to='https://vova-iz-tambova.github.io/russian-travel/' target='_blank' className='portfolio__nav'>
        <p className='portfolio__name'>Адаптивный сайт</p>
        <p className='portfolio__arrow'>↗</p>
      </Link>
      <Link to='https://vova-iz-tambova.github.io/mesto-react/' target='_blank' className='portfolio__nav'>
        <p className='portfolio__name'>Одностраничное приложение</p>
        <p className='portfolio__arrow'>↗</p>
      </Link>
    </section>
  );
};

export default Portfolio;
