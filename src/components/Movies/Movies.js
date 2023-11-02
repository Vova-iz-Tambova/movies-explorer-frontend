import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <div className='movies__pagination'>
        <button className='movies__more'>Ещё</button>
      </div>
    </section>
  )
}
export default Movies;