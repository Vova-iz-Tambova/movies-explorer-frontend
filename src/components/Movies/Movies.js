import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
      <div className='movies__pagination'>
        <button type='button' className='movies__more  animation'>Ещё</button>
      </div>
      {/* <Preloader /> */}
    </div>
  )
}
export default Movies;