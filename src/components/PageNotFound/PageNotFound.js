import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <NavLink to="/" className="not-found__link  effect">Назад</NavLink>
    </section>
  )
}
export default PageNotFound;