import './Movies.css';
import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import getBeatFilmMovies from '../../utils/MoviesApi';

function Movies() {
  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem("allMovies")) || []);
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [quantity, setQuantity] = React.useState(2);
  const [loader, setLoader] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    setLoader(true);
    if (allMovies.length === 0) {
      getBeatFilmMovies()
        .then((res) => {
          console.log('запрос');
          localStorage.setItem("allMovies", JSON.stringify(res));
          setAllMovies(res);
        }).catch(console.error)
    }
    setLoader(false);
    setMovies(searchMovies.slice(0, quantity));
    setTimeout(() => {
      setSearch('');
      setQuantity(2);
      setSearchMovies(allMovies.slice(0, 8));
    }, 400);
  }, [search]);

  React.useEffect(() => {
    setLoader(true);
    if (searchMovies.length > quantity) {
      setMessage('');
    }
    else {
      setMessage('Воспользуйтесь новым поиском');
    }
    setTimeout(() => {
      setMovies(searchMovies.slice(0, quantity))
      setLoader(false);
    }, 400);
  }, [search, quantity])

  // setAllMovies(JSON.parse(localStorage.getItem("allMovies")))
  // setLoader(true);
  // setTimeout(() => {
  //   setLoader(false);
  // }, 400);

  return (
    <main className="movies">
      <SearchForm
        setMovies={setMovies}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        setSearchMovies={setSearchMovies}
      />
      <MoviesCardList movies={movies} />
      <div className='movies__pagination'>
        {loader ?
          <Preloader />
          : <> {
            message ?
              <p className='movies__message'>{message}</p>
              :
              <button type='button' onClick={() => { setQuantity(quantity + 2); }}
                className='movies__more  animation'>Ещё</button>
          }
          </>
        }
      </div>
    </main >
  )
}
export default Movies;