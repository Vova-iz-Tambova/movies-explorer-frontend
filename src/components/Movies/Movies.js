import './Movies.css';
import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import getBeatFilmMovies from '../../utils/MoviesApi';

function Movies() {
  const [allMovies, setAllMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [quantity, setQuantity] = React.useState(12);
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setLoader(true);
    if (!localStorage.getItem("allMovies")) {
      getBeatFilmMovies()
        .then((res) => {
          console.log('запрос')
          localStorage.setItem("allMovies", JSON.stringify(res));
          setAllMovies(res);
        })
        .catch(console.error);
    }
    setMovies(allMovies.slice(0, quantity));
    setLoader(false);
  }, [quantity, allMovies])

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <div className='movies__pagination'>
        {loader ?
          <Preloader />
          :
          <button type='button' onClick={() => {
            setLoader(true);
            setQuantity(quantity + 1);
          }}
            className='movies__more  animation'>Ещё</button>
        }
      </div>

    </main>
  )
}
export default Movies;