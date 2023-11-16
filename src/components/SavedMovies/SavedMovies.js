import "./SavedMovies.css";
import React from "react";
// import unloved from "../../images/unsave.svg";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import SearchForm from "../Movies/SearchForm/SearchForm";
import api from "../../utils/MainApi";

function SavedMovies() {
  const [favoredMoves, setFavoredMoves] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [isShorts, setIsShorts] = React.useState(false);
  const [film, setFilm] = React.useState('');

  const buttonClass = (`card__panel_cross`);

  function newSearch() {
    setSearch(film);
  };

  function handleRemoveFavored(movie) {
    api.removeFavoredMoves(movie._id).catch(console.error)
  }

  React.useEffect(() => {
    api
      .getFavoredMoves()
      .then((res) => {
        return res.filter((item) =>
          item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(search.toLowerCase())
        )
      })
      .then((res) => {
        if (isShorts) {
          return res.filter((item) => item.duration <= 40);
        } else {
          return res;
        }
      })
      .then((res) => setFavoredMoves(res))
      .catch(console.error);

  }, [search, isShorts, { handleRemoveFavored }])

  return (
    <main className="saved">
      <SearchForm
        setSearch={setSearch}
        setIsShorts={setIsShorts}
        isShorts={isShorts}
        newSearch={newSearch}
        film={film}
        setFilm={setFilm}
      />
      <ul className="saved__list">
        {favoredMoves.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
            movieId={movie.movieId}
            nameRU={movie.nameRU}
            image={movie.image}
            trailerLink={movie.trailerLink}
            duration={movie.duration}
            isFavored={true}
            buttonClass={buttonClass}
            handleRemoveFavored={handleRemoveFavored}
          />
        ))}
      </ul>
    </main>
  );
}
export default SavedMovies;
