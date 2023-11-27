import './MoviesCard.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function MoviesCard({ movie, savedMovies, onLikeMovie, onDeleteMovie }) {
  const isLiked = savedMovies.some((saveMovie) => saveMovie.movieId === movie.id);

  const { pathname } = useLocation();

  function handleMovie() {
    if (isLiked === true) {
      const savedMovieId = savedMovies.find(
        (item) => item.movieId === movie.id
      );
      onDeleteMovie(savedMovieId);
    } else {
      onLikeMovie(movie)
    }
  }

  function handleDelete() { onDeleteMovie(movie) }

  return (
    <div className="card">
      <Link to={movie.trailerLink}
        target='blank'
        rel="noreferrer">
        <img
          className='card__preview  effect'
          src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image}
          alt={movie.nameRU}
        />
      </Link>
      {pathname === '/saved-movies' ? (
        <div onClick={handleDelete}
          className='card__panel  card__panel_cross  animation'>
          <div className="card__info">
            <h2 className='card__title'>{movie.nameRU}</h2>
            <p className='card__duration'>{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
          </div >
        </div >
      ) : (
        <div onClick={handleMovie}
          className={`card__panel  card__panel_heart  animation : ${isLiked && `card__panel_liked`}`}>
          <div className="card__info">
            <h2 className='card__title'>{movie.nameRU}</h2>
            <p className='card__duration'>{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
          </div >
        </div >
      )}
    </div>

  );
}

export default MoviesCard;