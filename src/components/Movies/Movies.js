import './Movies.css';
import React, { useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import getBeatFilmMovies from '../../utils/MoviesApi';

function Movies() {
  // const [allMovies, setAllMovies] = React.useState([]);
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [quantity, setQuantity] = React.useState(3);
  const [loader, setLoader] = React.useState(false);
  const [message, setMessage] = React.useState('Воспользуйтесь поиском');
  const [search, setSearch] = React.useState('');
  // const [filter, setFilter] = React.useState('f');
  const [isShorts, setIsShorts] = React.useState(false);

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
            setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          }));
      });
      getAllMovies
        .then((res) => { // тут будет фильтр поисковой строки
          return res;
        })
        .then((res) => { // фильтр короткометражек
          if (isShorts) {
            return res.filter((item) => { return item.duration <= 40 })
          } else {
            return res;
          }

        })
        .then((res) => {
          setLoader(false);
          if (res.length >= quantity) {
            setMessage('')
          } else {
            setMessage('Показаные все результаты поиска');
          };
          return res;
        })
        .then((res) => { // фильтр рендера
          return setMovies(res.slice(0, quantity));
        })
        .catch(err => setMessage(err))
    }
  }, [search, quantity, isShorts])


  // function getMovies(isShorts, setMovies, quantity) {
  //   if (isShorts) {
  //     setMovies(searchMovies.filter((item) => { return item.duration <= 40 }).slice(0, quantity));
  //   } else {
  //     setMovies(searchMovies.slice(0, quantity));
  //   }
  //   return
  // }

  // React.useEffect(() => {
  //   setLoader(true);
  //   if (allMovies.length === 0) {
  //     getBeatFilmMovies()
  //       .then((res) => {
  //         console.log('запрос');
  //         localStorage.setItem("allMovies", JSON.stringify(res));
  //         setAllMovies(res);
  //       }).catch(console.error)
  //   }
  //   setLoader(false);
  //   console.log(search);
  //   getMovies(isShorts, setMovies, quantity);
  //   setTimeout(() => {
  //     setSearch('');
  //     setQuantity(2);
  //     setSearchMovies(allMovies);
  //   }, 400);
  // }, [search]);

  // React.useEffect(() => {
  //   setLoader(true);
  //   if (searchMovies.length > quantity) {
  //     setMessage('');
  //   }
  //   else {
  //     setMessage('Воспользуйтесь новым поиском');
  //   }
  //   setTimeout(() => {
  //     getMovies(isShorts, setMovies, quantity);
  //     setLoader(false);
  //   }, 400);
  // }, [search, quantity])


  return (
    <main className="movies">
      <SearchForm
        setMovies={setMovies}
        search={search}
        setSearch={setSearch}
        setSearchMovies={setSearchMovies}
        setIsShorts={setIsShorts}
        isShorts={isShorts}
      />
      <MoviesCardList movies={movies} />
      <div className='movies__pagination'>
        {loader ?
          <Preloader />
          : <> {
            message ?
              <p className='movies__message'>{message}</p>
              :
              <button type='button' onClick={() => { setQuantity(quantity + 3); }}
                className='movies__more  animation'>Ещё</button>
          }
          </>
        }
      </div>
    </main >
  )
}
export default Movies;