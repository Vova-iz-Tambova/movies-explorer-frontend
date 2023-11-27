import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li><Link to='https://vova-iz-tambova.github.io/how-to-learn/' target='_blank' className='portfolio__link  effect'>
          <p className='portfolio__name'>Статичный сайт</p>
          <p className='portfolio__arrow'>↗</p>
        </Link>
        </li>
        <li><Link to='https://vova-iz-tambova.github.io/russian-travel/' target='_blank' className='portfolio__link  effect'>
          <p className='portfolio__name'>Адаптивный сайт</p>
          <p className='portfolio__arrow'>↗</p>
        </Link>
        </li>
        <li><Link to='https://vova-iz-tambova.github.io/mesto-react/' target='_blank' className='portfolio__link  effect'>
          <p className='portfolio__name'>Одностраничное приложение</p>
          <p className='portfolio__arrow'>↗</p>
        </Link></li>
      </ul>
    </section>
  );
};

export default Portfolio;
