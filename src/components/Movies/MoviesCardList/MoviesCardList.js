import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <ul className='list'>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
      <li className='list__item'><MoviesCard savedMovies={true} /></li>
    </ul>
  )
};

export default MoviesCardList;