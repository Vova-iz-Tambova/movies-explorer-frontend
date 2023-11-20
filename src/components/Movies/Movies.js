import './Movies.css';
import React, { useState } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import api from '../../utils/MainApi';

function Movies({ loader, setRender, movies, search, setSearch, isShorts, setIsShorts }) {
  const [input, setInput] = useState(JSON.parse(localStorage.getItem("input")) || '');

  function handleSearch(e) {
    setInput(e.target.value);
    localStorage.setItem("input", JSON.stringify(e.target.value));
  }

  function handleChecked() {
    setIsShorts(!isShorts);
    localStorage.setItem("isShort", JSON.stringify(!isShorts));
  }

  function handleSubmit() {
    setSearch(input);
    console.log(input);
    console.log(search);
    setRender(true);
  }


  // function newSearch() {
  //   setSearch(film);
  //   localStorage.removeItem("movies");
  //   if (window.innerWidth > 1281) { setQuantity(12); setShowMoreFilms(3) }
  //   if (window.innerWidth < 1280) { setQuantity(8); setShowMoreFilms(2) }
  //   if (window.innerWidth < 768) { setQuantity(5); setShowMoreFilms(2) }
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setTimeout(() => {
  //       newSearch();
  //     }, 2000)
  //   });
  //   // window.removeEventListener('resize');
  // });


  const [message, setMessage] = useState('Воспользуйтесь поиском');
  // const [search, setSearch] = useState(JSON.parse(localStorage.getItem("film")) || '');
  const [film, setFilm] = useState(JSON.parse(localStorage.getItem("film")) || '');
  const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem("quantity")) || 12);
  const [showMoreFilms, setShowMoreFilms] = useState(JSON.parse(localStorage.getItem("showMoreFilms")) || 3);


  // setMovies(() => {
  //   allMovies.filter((item) => item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
  //       item.nameEN.toLowerCase().includes(search.toLowerCase())
  //   )
  // })



  // }

  // console.log(res);
  // console.log(quantity);
  //   setLoader(false);
  //   if (res.length > quantity) {
  //     setMessage('')
  //   } else if (res.length === 0) {
  //     setMessage('Ничего не найдено');
  //   } else {
  //     setMessage('Показаные все результаты поиска');
  //   };
  //   return res;
  // })
  // .then((res) => { // фильтр рендера
  //   setMovies(res.slice(0, quantity));
  // localStorage.setItem("movies", JSON.stringify(movies));
  // localStorage.setItem("quantity", JSON.stringify(quantity));
  // localStorage.setItem("showMoreFilms", JSON.stringify(showMoreFilms));

  return (
    <main className="movies">
      <SearchForm
        input={input}
        setInput={setInput}
        // search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        isShorts={isShorts}
        handleChecked={handleChecked}
        handleSubmit={handleSubmit}
      // setIsShorts={setIsShorts}
      // isShorts={isShorts}
      // setQuantity={setQuantity}
      // film={film}
      // setFilm={setFilm}
      // newSearch={newSearch}
      />
      <MoviesCardList
        movies={movies}
      // favoredMoves={favoredMoves}
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