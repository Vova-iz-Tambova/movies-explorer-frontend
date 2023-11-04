import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='list'>
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      {/* <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} />
      <MoviesCard savedMovies={true} /> */}
    </section>
  )
};

export default MoviesCardList;