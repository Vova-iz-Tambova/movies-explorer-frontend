import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import api from "../../../utils/MainApi";

function MoviesCardList(props) {
  const buttonClass = (`card__panel_liked`);

  const [favoredMoves, setFavoredMoves] = React.useState([]);

  React.useEffect(() => {
    api.getFavoredMoves().then(res => setFavoredMoves(res))
      .catch(console.error);
  }, [props.movie])

  return (
    <ul className='list'>
      {props.movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movie={movie}
          movieId={movie.id}
          nameRU={movie.nameRU}
          image={`https://api.nomoreparties.co${movie.image.url}`}
          trailerLink={movie.trailerLink}
          duration={movie.duration}
          isFavored={favoredMoves.some((item) => item.movieId === movie.id)}
          buttonClass={buttonClass}
        />
      ))}
    </ul>
  )
};

export default MoviesCardList;
