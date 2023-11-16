import "./MoviesCard.css";
import React from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/MainApi";

function MoviesCard(props) {
  const [favored, setFavored] = React.useState(props.isFavored);

  function handleMovie() {
    if (favored) {
      api.getFavoredMoves().then(res => {
        res.forEach((item) => {
          if (item.movieId === props.movieId) {
            api.removeFavoredMoves(item._id).catch(console.error)
          }
        })
      }).catch(console.error);
    } else {
      api.addFavoredMoves(props.movie).catch(console.error);
    }
    setFavored(!favored);
  }

  return (
    <div className="card">
      <Link to={props.trailerLink}>
        <img
          className="card__preview  effect"
          src={props.image}
          alt={props.nameRU}
        />
      </Link>
      <div
        className={`card__panel  animation  ${favored && props.buttonClass}`}
        onClick={handleMovie}
      >
        <div className="card__info">
          <h2 className="card__title">{props.nameRU}</h2>
          <p className="card__duration">
            {`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
