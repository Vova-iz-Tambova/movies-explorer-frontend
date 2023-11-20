import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies, onLikeMovie, onDeleteMovie }) {
  const [renderMovies, setRenderMovies] = useState([]);
  const [quantity, setQuantity] = useState(12);
  const [showMoreFilms, setShowMoreFilms] = useState(3);

  const { pathname } = useLocation();

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, []);

  let timeout = null;

  function onResize() {
    timeout && clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (pathname === '/saved-movies') {
        setRenderMovies(movies);
      }
    if (window.innerWidth > 1281) { setQuantity(12); setShowMoreFilms(3) }
    if (window.innerWidth < 1280) { setQuantity(8); setShowMoreFilms(2) }
    if (window.innerWidth < 768) { setQuantity(5); setShowMoreFilms(2) }
    }, 100);
  };

  useEffect(() => {
    setRenderMovies(movies.slice(0, quantity))
  }, [movies, quantity]);

  function handleMoreClick() {
    const newArray = [
      ...movies.slice(0, (quantity + showMoreFilms))
    ]
    setQuantity(quantity + showMoreFilms);
    setRenderMovies(newArray);
  };

  return (
    <section>
      {renderMovies.length > 0 ? (
        <>
          <ul className={`list ${(pathname === '/saved-movies') && `list__saved`}`}>
            {renderMovies.map((movie) => (
              <MoviesCard
                key={movie.id || movie.movieId}
                movie={movie}
                savedMovies={savedMovies}
                onLikeMovie={onLikeMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
          </ul>
        </>
      ) :
        (
          <p className='list__message'>Ничего не найдено</p>
        )}

      {renderMovies.length === movies.length ? '' :
        <div className={pathname !== '/saved-movies' ? 'list__pagination' : 'show-more_disable'}>
          <button
            className='list__more  animation'
            type='button'
            onClick={handleMoreClick}
          >Ещё</button>
        </div>
      }
    </section >
  );
};

export default MoviesCardList;