import './Movies.css';
import React, { useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import getBeatFilmMovies from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

function Movies() {
  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem("allMovies")) || []);
  const [favoredMoves, setFavoredMoves] = React.useState(JSON.parse(localStorage.getItem("favoredMoves")) || []);
  const [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem("movies")) || []);
  const [loader, setLoader] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [search, setSearch] = React.useState(JSON.parse(localStorage.getItem("film")) || '');
  const [isShorts, setIsShorts] = React.useState(JSON.parse(localStorage.getItem("isShort")) || false);
  const [film, setFilm] = React.useState('o');
  const [quantity, setQuantity] = React.useState(JSON.parse(localStorage.getItem("quantity")) || 12);
  const [showMoreFilms, setShowMoreFilms] = React.useState(3);

  function newSearch() {
    setSearch(film);
    localStorage.removeItem("movies");
    if (window.innerWidth > 1281) { setQuantity(12); setShowMoreFilms(3) }
    if (window.innerWidth < 1280) { setQuantity(8); setShowMoreFilms(2) }
    if (window.innerWidth < 768) { setQuantity(5); setShowMoreFilms(2) }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        newSearch();
      }, 2000)
    });
  });

  const getAllMovies = new Promise((resolve, reject) => {
    if (allMovies.length === 0) {
      getBeatFilmMovies().then(res => {
        localStorage.setItem("allMovies", JSON.stringify(res));
        setFavoredMoves(res);
        return resolve(res);
      })
        .catch((err => {
          console.log(err);
          reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        }));
    } else {
      resolve(allMovies);
    }
  });

  const getFavoredMovies = new Promise((resolve, reject) => {
    if (favoredMoves.length === 0) {
    api.getFavoredMoves().then(res => {
      localStorage.setItem("favoredMoves", JSON.stringify(res));
      return resolve(res);
    })
      .catch((err => {
        console.log(err);
        reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
      }));
    } else {
    resolve(favoredMoves);
    }
  });

  useEffect(() => {
    if (search) {
      setLoader(true);
      Promise.all([getAllMovies, getFavoredMovies])
        .then(([resAllMovies, resFavoredMoves]) => {
          // console.log(resAllMovies);
          // console.log(resFavoredMoves);
          setAllMovies(resAllMovies);
          setFavoredMoves(resFavoredMoves);
          return resAllMovies;
        })
        .then(res => res.filter((item) =>
          item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(search.toLowerCase())
        )
        )
        .then((res) => { // фильтр короткометражек
          if (isShorts) {
            return res.filter((item) => item.duration <= 40);
          } else {
            return res;
          }
        })
        .then((res) => { // фильтр сообщений
          // console.log(res);
          // console.log(quantity);
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
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            setMovies(res.slice(0, quantity));
          }, 400)
          localStorage.setItem("movies", JSON.stringify(movies));
          localStorage.setItem("quantity", JSON.stringify(quantity));
        })
        .catch(err => {
          setLoader(false);
          setMessage(err);
        })
    }
  }, [search, setSearch, isShorts, quantity]);

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
      <MoviesCardList
        movies={movies}
        favoredMoves={favoredMoves}
      />
      <div className='movies__pagination'>
        {loader ?
          <Preloader />
          : <> {
            message ?
              <p className='movies__message'>{message}</p>
              :
              <button type='button' onClick={() => {
                setQuantity(quantity + showMoreFilms);
              }}
                className='movies__more  animation'>Ещё</button>
          }
          </>
        }
      </div>
    </main >
  )
}
export default Movies;

// useEffect(() => {
//   if (search) {
//     setLoader(true);
//     const getAllMovies = new Promise((resolve, reject) => {
//       getBeatFilmMovies().then(res => {
//         localStorage.setItem("allMovies", JSON.stringify(res));
//         return res;
//       }).then(() => {
//         const allMovies = JSON.parse(localStorage.getItem("allMovies"));
//         resolve(allMovies)
//       })
//         .catch((err => {
//           console.log(err);
//           reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
//         }));
//     });
//     getAllMovies
//       .then((res) => { // фильтр поиска строки
//         return res.filter((item) =>
//           item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
//           item.nameEN.toLowerCase().includes(search.toLowerCase())
//         );
//       })
//       .then((res) => { // фильтр короткометражек
//         if (isShorts) {
//           return res.filter((item) => item.duration <= 40);
//         } else {
//           return res;
//         }
//       })
//       .then((res) => { // фильтр сообщений
//         setLoader(false);
//         if (res.length > quantity) {
//           setMessage('')
//         } else if (res.length === 0) {
//           setMessage('Ничего не найдено');
//         } else {
//           setMessage('Показаные все результаты поиска');
//         };
//         return res;
//       })
//       .then((res) => { // фильтр рендера
//         localStorage.setItem("movies", JSON.stringify(res))
//         return setMovies(res.slice(0, quantity));
//       })
//       .catch(err => {
//         setLoader(false);
//         setMessage(err);
//       })
//   }
// }, [search, quantity, isShorts])