import './Movies.css';
import React, { useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import getBeatFilmMovies from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [message, setMessage] = React.useState('Воспользуйтесь поиском');
  const [search, setSearch] = React.useState('');
  const [isShorts, setIsShorts] = React.useState(false);
  const [film, setFilm] = React.useState('я');
  const [quantity, setQuantity] = React.useState(12);
  const [showMoreFilms, setShowMoreFilms] = React.useState(3);

  function newSearch() {
    if (window.innerWidth < 1281) { setQuantity(12); setShowMoreFilms(3) }
    if (window.innerWidth < 981) { setQuantity(8); setShowMoreFilms(2) }
    if (window.innerWidth < 768) { setQuantity(5); setShowMoreFilms(2) }
    setSearch(film);
  }

  useEffect(() => {
    if (search) {
      setLoader(true);
      const getAllMovies = new Promise((resolve, reject) => {
        getBeatFilmMovies().then(res => {
          localStorage.setItem("allMovies", JSON.stringify(res));
          return res;
        }).then(() => {
          const allMovies = JSON.parse(localStorage.getItem("allMovies"));
          resolve(allMovies)
        })
          .catch((err => {
            console.log(err);
            reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
          }));
      });
      getAllMovies
        .then((res) => { // фильтр поиска строки
          return res.filter((item) =>
            item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
            item.nameEN.toLowerCase().includes(search.toLowerCase())
          );
        })
        .then((res) => { // фильтр короткометражек
          if (isShorts) {
            return res.filter((item) => item.duration <= 40);
          } else {
            return res;
          }
        })
        .then((res) => { // фильтр сообщений
          setLoader(false);
          if (res.length > quantity) {
            setMessage('')
          } else if (res.length === 0) {
            setMessage('Ничего не найдено');
          } else {
            setMessage('Показаные все результаты поиска');
          };
          return res;
        })
        .then((res) => { // фильтр рендера
          return setMovies(res.slice(0, quantity));
        })
        .catch(err => {
          setLoader(false);
          setMessage(err);
        })
    }
  }, [search, quantity, isShorts])

  return (
    <main className="movies">
      <SearchForm
        setSearch={setSearch}
        setIsShorts={setIsShorts}
        isShorts={isShorts}
        setQuantity={setQuantity}
        film={film}
        setFilm={setFilm}
        newSearch={newSearch}
      />
      <MoviesCardList movies={movies} />
      <div className='movies__pagination'>
        {loader ?
          <Preloader />
          : <> {
            message ?
              <p className='movies__message'>{message}</p>
              :
              <button type='button' onClick={() => { setQuantity(quantity + showMoreFilms); }}
                className='movies__more  animation'>Ещё</button>
          }
          </>
        }
      </div>
    </main >
  )
}
export default Movies;
