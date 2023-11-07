import './SavedMovies.css';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies() {
  return (
    <main className='saved'>
      <SearchForm />
      <div className='saved__list'>
        <MoviesCard savedMovies={false} />
        <MoviesCard savedMovies={false} />
        {/* <MoviesCard savedMovies={false} /> */}
      </div>
      <div className='saved__pagination'>
      </div>
    </main>
  )
}
export default SavedMovies;