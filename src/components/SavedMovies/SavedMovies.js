import "./SavedMovies.css";
import React from "react";
// import unloved from "../../images/unsave.svg";
// import MoviesCard from "./MoviesCard/MoviesCard";
// import SearchForm from "./SearchForm/SearchForm";
// import api from "../../utils/MainApi";

function SavedMovies(props) {
  // const [favoredMoves, setFavoredMoves] = React.useState(JSON.parse(localStorage.getItem("favoredMoves")) || []);
  // const [search, setSearch] = React.useState('');
  // const [isShorts, setIsShorts] = React.useState(false);
  // const [film, setFilm] = React.useState('');

  // const buttonClass = (`card__panel_cross`);

  // function newSearch() {
  //   setSearch(film);
  // };

  // function handleRemoveFavored(movie) {
  //   api.removeFavoredMoves(movie._id).catch(console.error)
  // }

  // React.useEffect(() => {
  //   if (!favoredMoves.length === 0) {
  //     props.setMessge('')
  //   }
  //   else {
  //     props.setMessge('')
  //   }
    // favoredMoves.filter((item) =>
    //       item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
    //       item.nameEN.toLowerCase().includes(search.toLowerCase())
    //     )
    //   })
    //   .then((res) => {
    //     if (isShorts) {
    //       return res.filter((item) => item.duration <= 40);
    //     } else {
    //       return res;
    //     }
    //   })
    //   .then((res) => {
    //     localStorage.setItem("favoredMoves", JSON.stringify(res));
    //     setFavoredMoves(res)
    //   })

    //   .catch(console.error);

  // }, [])

//   return (
//     <main className="saved">
//       {/* <SearchForm
//         setSearch={setSearch}
//         setIsShorts={setIsShorts}
//         isShorts={isShorts}
//         newSearch={newSearch}
//         film={film}
//         setFilm={setFilm}
//       /> */}
//       <ul className="saved__list">
//         {favoredMoves.map((movie) => (
//           <MoviesCard
//             key={movie._id}
//             movie={movie}
//             movieId={movie.movieId}
//             nameRU={movie.nameRU}
//             image={movie.image}
//             trailerLink={movie.trailerLink}
//             duration={movie.duration}
//             isFavored={true}
//             buttonClass={buttonClass}
//             handleRemoveFavored={handleRemoveFavored}
//           />
//         ))}
//       </ul>
//     </main>
//   );
}
export default SavedMovies;
