import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  DESKTOP_MAX_WIDTH,
  DESKTOP_DEFAULT_MOVIES,
  DESKTOP_MORE_STEP,
  TABLET_MAX_WIDTH,
  TABLET_DEFAULT_MOVIES,
  TABLET_MORE_STEP,
  MOBILE_MAX_WIDTH,
  MOBILE_DEFAULT_MOVIES,
  MOBILE_MORE_STEP,
} from '../../../utils/constant';

function MoviesCardList({ movies, savedMovies, onLikeMovie, onDeleteMovie, searchMessage }) {
  const [renderMovies, setRenderMovies] = useState([]);
  const [quantity, setQuantity] = useState(DESKTOP_DEFAULT_MOVIES);
  const [showMoreFilms, setShowMoreFilms] = useState(DESKTOP_MORE_STEP);

  const { pathname } = useLocation();

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [movies]);

  let timeout = null;

  function onResize() {
    timeout && clearTimeout(timeout);

    timeout = setTimeout(() => {
      const width = window.innerWidth;
      if (pathname === '/saved-movies') {
        setRenderMovies(movies);
      } else {
        if (width > TABLET_MAX_WIDTH) {
          setQuantity(DESKTOP_DEFAULT_MOVIES);
          setShowMoreFilms(DESKTOP_MORE_STEP);
        } else if (width > MOBILE_MAX_WIDTH) {
          setQuantity(TABLET_DEFAULT_MOVIES);
          setShowMoreFilms(TABLET_MORE_STEP);
        } else {
          setQuantity(MOBILE_DEFAULT_MOVIES);
          setShowMoreFilms(MOBILE_MORE_STEP);
        }
      }
    }, 400);
  }

  React.useEffect(() => {
    if (pathname === '/movies') {
      setRenderMovies(movies.slice(0, quantity));
    } else {
      setRenderMovies(movies);
    }
  }, [movies, quantity]);

  function handleMoreClick() {
    const newArray = [
      ...movies.slice(0, (quantity + showMoreFilms))
    ]
    setQuantity(quantity + showMoreFilms);
    setRenderMovies(newArray);
  }

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
          <p className='list__message'>{searchMessage}</p>
        )}
      {renderMovies.length === movies.length ? '' :
        <div className={pathname !== '/saved-movies' ? 'list__pagination' : 'list__pagination_disable'}>
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