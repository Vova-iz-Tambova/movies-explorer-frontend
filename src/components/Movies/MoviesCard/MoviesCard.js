import { Link } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  function handleMovie() {
    props.handleMovie(props.movie) }

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
        className={props.buttonClass}
        // style={{
        //   backgroundImage: `url(${props.favored})`,
        // }}
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
