import './SavedMovies.css';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies() {
  return (
    <section className='saved'>
      <SearchForm />
      <div className='saved__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className='saved__pagination'>
        {/* <button className='saved__more'>Ещё</button> */}
      </div>
    </section>
  )
}
export default SavedMovies;